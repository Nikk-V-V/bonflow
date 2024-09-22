// Player.jsx
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import useGame from '../../../stores/useGame.jsx';
import { alignPlayerYPosition } from '../../../helpers/players/playerPositions.js';

export default function Player({ player }) {
    const { processMove, updatePlayerPosition } = useGame();
    const { model, movementPath, id, position } = player;

    const body = useRef();
    const currentPosition = useRef(new THREE.Vector3());
    const pathIndex = useRef(0);

    const [isMoving, setIsMoving] = useState(false);
    const speed = 5;

    const gltf = useGLTF(model.path);

    // Ініціалізація початкової позиції
    useEffect(() => {
        if (body.current) {
            const startPosition = position || new THREE.Vector3(0, 0, 0);
            currentPosition.current.copy(startPosition);

            body.current.position.copy(startPosition);
            alignPlayerYPosition(body);
            
            updatePlayerPosition(id, startPosition, body.current.quaternion);
        }
    }, [body.current]);

    // Запускаємо рух, коли змінюється movementPath
    useEffect(() => {
        if (movementPath && movementPath.length > 0) {
            setIsMoving(true);
            pathIndex.current = 0;
        }
    }, [movementPath]);

    console.log(movementPath);

    useFrame((state, delta) => {
        if (body.current) {
            if (isMoving && movementPath && movementPath.length > 0) {
                const target = movementPath[pathIndex.current];

                if (target) {
                    const distance = currentPosition.current.distanceTo(target);

                    if (distance > 0.01) {
                        const step = speed * delta;
                        // Обчислюємо напрямок руху
                        // const direction = target.clone().sub(currentPosition.current).normalize();
                        // Обчислюємо кут повороту
                        const lookAtMatrix = new THREE.Matrix4();
                        lookAtMatrix.lookAt(currentPosition.current, target, body.current.up);
                        const quaternion = new THREE.Quaternion();
                        quaternion.setFromRotationMatrix(lookAtMatrix);

                        // Плавно інтерполюємо напрямок (поворот)
                        body.current.quaternion.slerp(quaternion, 0.1);

                        // Рухаємо гравця
                        currentPosition.current.lerp(target, step / distance);
                        body.current.position.copy(currentPosition.current);
                        alignPlayerYPosition(body);
                        // Оновлюємо позицію та напрямок гравця у стані
                        updatePlayerPosition(id, currentPosition.current, body.current.quaternion);
                    } else {
                        body.current.position.copy(target);
                        currentPosition.current.copy(target);
                        pathIndex.current += 1;
                        alignPlayerYPosition(body);
                        // Оновлюємо позицію та напрямок гравця у стані
                        updatePlayerPosition(id, currentPosition.current, body.current.quaternion);

                        if (pathIndex.current >= movementPath.length) {
                            setIsMoving(false);
                            processMove();
                        }
                    }
                }

            }
        }
    });

    return (
        <group>
            {player && (
                <primitive
                    ref={body}
                    object={gltf.scene}
                    scale={[1, 1, 1]}
                />
            )}
        </group>
    );
}
