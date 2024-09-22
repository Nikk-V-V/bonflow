import { useContext, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MaterialContext } from '@hooks/useMaterialsContext.js';

export default function Dice({ setDicesResult, index, position, isRolling }) {
    const { boxGeometry, diceMaterial } = useContext(MaterialContext);
    const diceRef = useRef();

    // Випадковий напрямок обертання
    const randomDirection = useRef({
        x: Math.random() > 0.5 ? 1 : -1,
        y: Math.random() > 0.5 ? 1 : -1,
        z: Math.random() > 0.5 ? 1 : -1,
    });

    const rotationSpeed = 0.2; // Швидкість обертання

    const rollDice = value => {
        switch (value) {
            case 1:
                diceRef.current.rotation.set(0, -Math.PI / 2, 0);
                break;
            case 2:
                diceRef.current.rotation.set(0, Math.PI / 2, 0);
                break;
            case 3:
                diceRef.current.rotation.set(Math.PI / 2, 0, 0);
                break;
            case 4:
                diceRef.current.rotation.set(-Math.PI / 2, 0, 0);
                break;
            case 5:
                diceRef.current.rotation.set(0, 0, 0);
                break;
            case 6:
                diceRef.current.rotation.set(Math.PI, 0, 0);
                break;
            default:
                break;
        }
    };

    // Функція для отримання рандомного числа від 1 до 6 і повороту кубика відповідно
    const getRandomDiceResult = () => {
        const value = Math.floor(Math.random() * 6) + 1; // Випадкове число від 1 до 6

        setDicesResult(prev => ({
            ...prev,
            [index ? 'first' : 'second']: value,
        }));

        rollDice(value);
    };

    useEffect(() => {
        if (!isRolling) {
            getRandomDiceResult(); // Показати результат після зупинки
        }
    }, [isRolling]);

    useFrame(() => {
        if (isRolling) {
            // Обертання кубика під час "кидка"
            diceRef.current.rotation.x +=
                rotationSpeed * randomDirection.current.x;
            diceRef.current.rotation.y +=
                rotationSpeed * randomDirection.current.y;
            diceRef.current.rotation.z +=
                rotationSpeed * randomDirection.current.z;
        }
    });

    return (
        <mesh
            scale={1.2}
            ref={diceRef}
            position={position}
            geometry={boxGeometry}
            material={diceMaterial}
        >
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    );
}
