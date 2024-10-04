import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Dices from './Dices/Dices.jsx';
import Lights from '../../../Experience/GameBoard/Lights/Lights.jsx';
import { cn } from '@/lib/utils.js';

export default function DiceButton() {
    const [isClicked, setIsClicked] = useState(false);
    const [isRolling, setIsRolling] = useState(false);

    const toggleRoll = () => {
        setIsClicked(true);
        setIsRolling(true);
        setTimeout(() => {
            setIsRolling(false);
        }, 1500);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleRoll}
                className={cn(
                    'cursor-pointer overflow-auto backdrop-blur-xl bg-opacity-80 bg-black border-opacity-80 border-green-600 rounded-full border-4 h-[8rem] w-[8rem]'
                )}
            >
                <Canvas
                    camera={{
                        fov: 45,
                        near: 1,
                        far: 200,
                        position: [0, 0, 6],
                    }}
                >
                    <Lights />
                    <Dices
                        isClicked={isClicked}
                        isRolling={isRolling}
                        setIsClicked={setIsClicked}
                    />
                </Canvas>
            </div>
        </div>
    );
}
