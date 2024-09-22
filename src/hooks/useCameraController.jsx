import useGame from '../stores/useGame.jsx';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';


const useCameraController = () => {
    const { getCurrentPlayer } = useGame();
    const currentPlayer = getCurrentPlayer();
    const { camera } = useThree();

    useFrame(() => {
        if (camera && currentPlayer && currentPlayer.position && currentPlayer.direction) {
            const playerPosition = new THREE.Vector3(
                currentPlayer.position.x,
                currentPlayer.position.y,
                currentPlayer.position.z
            );
            
            // Оновлений зсув камери
            const offset = new THREE.Vector3(2, 2, 6)
            const cameraPosition = playerPosition.clone().add(offset);

            camera.position.lerp(cameraPosition, 0.1);
            camera.lookAt(playerPosition);
        }
    });
}
export default useCameraController;