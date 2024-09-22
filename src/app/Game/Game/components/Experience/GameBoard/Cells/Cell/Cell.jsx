import React, { useContext, useRef } from 'react';
import { Text } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { MaterialContext } from '../../../../../../../../hooks/useMaterialsContext.js';

const Cell = ({ position, scale, title }) => {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    const obstacle = useRef();

    return (
        <group position={position}>
            <RigidBody
                ref={obstacle}
                type="fixed"
                colliders="cuboid"
                position={[0, 0.3, 0]}
                restitution={0.2}
                friction={0}
            >
                <mesh
                    geometry={boxGeometry}
                    material={cellMaterial}
                    position={[0, -0.1, 0]}
                    scale={[scale, 0.2, scale]}
                    receiveShadow
                />
                <Text
                    position={[0, 0.01, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    fontSize={0.2}
                    lineHeight={1.5}
                    color="#fca611"
                    anchorX="center"
                    anchorY="middle"
                    textAlign={'center'}
                >
                    {title}
                    <meshStandardMaterial color="#cdbd90" />
                </Text>
            </RigidBody>
        </group>
    );
};

export default Cell;
