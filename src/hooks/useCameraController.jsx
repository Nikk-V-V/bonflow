import useGame from '../stores/useGame.jsx';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const useCameraController = () => {
    const { getCurrentPlayer } = useGame();
    const currentPlayer = getCurrentPlayer();
    const { camera } = useThree();

    useFrame(() => {
        if (
            camera &&
            currentPlayer &&
            currentPlayer.position &&
            currentPlayer.direction
        ) {
            const playerPosition = new THREE.Vector3(
                currentPlayer.position.x,
                currentPlayer.position.y,
                currentPlayer.position.z
            );

            // Оновлений зсув камери
            const offset = new THREE.Vector3(-2, 5, 6);
            const cameraPosition = playerPosition.clone().add(offset);

            // Плавне оновлення позиції камери
            camera.position.lerp(cameraPosition, 0.1);

            // Плавне обертання камери
            const lookAtTarget = playerPosition;
            const currentQuaternion = new THREE.Quaternion().copy(camera.quaternion);
            camera.lookAt(lookAtTarget);
            const targetQuaternion = new THREE.Quaternion().copy(camera.quaternion);
            camera.quaternion.copy(currentQuaternion);
            camera.quaternion.slerp(targetQuaternion, 0.1);
        }
    });
};

export default useCameraController;