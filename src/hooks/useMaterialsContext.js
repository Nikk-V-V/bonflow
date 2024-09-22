import { createContext, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

/**
 * @MaterialContext
 * @Context
 */
export const MaterialContext = createContext({});

export default () => {
    /**
     * @Textures
     */
    const diceTextures = useLoader(TextureLoader, [
        '/textures/dice/1_dot.png',
        '/textures/dice/2_dots.png',
        '/textures/dice/3_dots.png',
        '/textures/dice/4_dots.png',
        '/textures/dice/5_dots.png',
        '/textures/dice/6_dots.png',
    ]);

    /**
     * @Geometry
     */
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

    /**
     * @Materials
     */
    const diceMaterial = diceTextures.map(
        texture => new THREE.MeshStandardMaterial({ map: texture })
    );
    const cellMaterial = new THREE.MeshStandardMaterial({
        color: '#000000',
    });

    /**
     * @GlobalContext
     */
    const [context] = useState({
        diceMaterial,
        boxGeometry,
        cellMaterial,
    });

    return context;
};
