// Player.jsx
import { memo, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { alignPlayerYPosition } from '@/helpers/players/playerPositions.js';
import useGame from '@/stores/useGame';

function Player({ player }) {
    const processMove = useGame((state) => state.processMove);
    const updatePlayerPosition = useGame((state) => state.updatePlayerPosition);
    const { model, movementPath, id, position } = player;

    const body = useRef();
    const currentPosition = useRef(new THREE.Vector3());
    const pathIndex = useRef(0);

    const [isMoving, setIsMoving] = useState(false);

    const gltf = useGLTF(model.path);

    // Ініціалізація початкової позиції
    useEffect(() => {
        if (body.current) {
            const startPosition = position || new THREE.Vector3(0, 0, 0);
            currentPosition.current.copy(startPosition);

            body.current.position.copy(startPosition);
            // Встановлюємо початковий поворот, використовуючи заданий у моделі кут
            if (model.rotation) {
                body.current.rotation.set(...model.rotation); // Встановлюємо початковий кут повороту з конфігурації моделі
            }
            alignPlayerYPosition(body);

            updatePlayerPosition(id, body.current.position, body.current.quaternion);
        }
    }, []);

    // Запускаємо рух, коли змінюється movementPath
    useEffect(() => {
        if (movementPath && movementPath.length > 0) {
            setTimeout(() => setIsMoving(true), 100); // Додаємо затримку, щоб уникнути швидких повторних рендерів
            pathIndex.current = 0;
        }
    }, [movementPath]);

    useFrame((state, delta) => {
        if (!isMoving || !movementPath || movementPath.length === 0) return;
    
        if (body.current) {
            const target = movementPath[pathIndex.current];
            if (target) {
                const distance = currentPosition.current.distanceTo(target);
    
                if (distance > 0.001) {
                    // Видаляємо використання кроку, замість цього будемо використовувати damp для плавного згладжування позиції
    
                    // Розрахунок напрямку руху
                    const direction = new THREE.Vector3().subVectors(target, currentPosition.current).normalize();
    
                    // Переміщення гравця в напрямку до цілі
                    // Плавне оновлення позиції гравця за допомогою MathUtils.damp
                    const step = Math.min(5 * delta, distance);
                    currentPosition.current.addScaledVector(direction, step);
    
                    // Плавне оновлення позиції гравця
                    const dampFactor = 1.5; // Додаткове зменшення фактору для більш плавного руху
                    body.current.position.lerp(new THREE.Vector3(currentPosition.current.x, body.current.position.y, currentPosition.current.z), 0.05); // Зменшуємо фактор для більшого пом'якшення

                    // Поворот фігури у напрямку до цілі на основі напряму руху
                    const initialRotationY = model.rotation ? model.rotation[1] : 0;
                    let targetAngle = initialRotationY;

                    // Визначення напряму руху та встановлення цільового кута
                    if (Math.abs(target.z - currentPosition.current.z) > Math.abs(target.x - currentPosition.current.x)) {
                        if (target.z - currentPosition.current.z < 0) {
                            targetAngle = initialRotationY; // Рух по осі Z в напрямку вперед (-z)
                        } else {
                            targetAngle = initialRotationY + Math.PI; // Рух по осі Z у від'ємному напрямку (назад, +z)
                        }
                    } else {
                        if (target.x - currentPosition.current.x > 0) {
                            targetAngle = initialRotationY + (-Math.PI / 2); // Рух по осі X в додатному напрямку (вправо)
                        } else {
                            targetAngle = initialRotationY + Math.PI / 2; // Рух по осі X у від'ємному напрямку (вліво)
                        }
                    }
                    

                    const currentAngle = body.current.rotation.y;
                    const angleDifference = THREE.MathUtils.damp(currentAngle, targetAngle, 2, delta); // Зменшення фактору для плавного обертання
                    body.current.rotation.set(0, angleDifference, 0);
                } else {
                    // Досягнуто цілі
                    pathIndex.current += 1;
                    if (pathIndex.current >= movementPath.length) {
                        body.current.position.lerp(new THREE.Vector3(target.x, body.current.position.y, target.z), 0.1); // Плавно завершуємо рух перед зупинкою
                        updatePlayerPosition(id, body.current.position, body.current.quaternion);
                        setIsMoving(false);
                        processMove();
                    }
                }
            }
        }
    });

    return (
        <group>
            {player && (
                <primitive ref={body} object={gltf.scene} scale={[1, 1, 1]} />
            )}
        </group>
    );
}

export default memo(Player);
