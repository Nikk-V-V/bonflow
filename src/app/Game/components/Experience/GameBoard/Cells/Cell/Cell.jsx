
// Updated Cell component
import React, { useContext, useRef } from 'react';
import { Text } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { MaterialContext } from '@/hooks/useMaterialsContext.js';

export default function Cell({ position, scale, title }) {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    const obstacle = useRef();

    return (
        <group position={position}>
           <RigidBody
                ref={obstacle}
                type="fixed"
                colliders="cuboid"
                position={[0, 0.3, 0]}
                restitution={0.7} // Increased for better bounce
                friction={0} // Reduced to avoid sticking completely
                linearDamping={0.1} // Added for gradual slowing without abrupt stopping
            >
                <mesh
                    geometry={boxGeometry}
                    material={cellMaterial}
                    position={[0, -0.1, 0]}
                    scale={[scale, 0.2, scale]}
                    receiveShadow
                />
            </RigidBody>
            <Text
                position={[0, 0.4, 0]} // Moved outside of RigidBody for better performance
                rotation={[-Math.PI / 2, 0, 0]}
                fontSize={0.2}
                lineHeight={1.5}
                color="#fca611"
                anchorX="center"
                anchorY="middle"
                textAlign={'center'}
            >
                {title}
                <meshStandardMaterial color="#ffffff" />
            </Text>
        </group>
    );
}