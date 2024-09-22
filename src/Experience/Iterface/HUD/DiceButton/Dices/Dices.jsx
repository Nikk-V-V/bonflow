// Dices.jsx
import { useEffect, useState } from 'react';
import Dice from './Dice/Dice.jsx';
import useGame from '../../../../../stores/useGame.jsx';

export default function Dices({ isRolling, isClicked, setIsClicked }) {
    const { getCurrentPlayer, move } = useGame();
    const [dicesResult, setDicesResult] = useState({
        first: 1,
        second: 1,
    });

    const currentPlayer = getCurrentPlayer();

    const { diceCount } = currentPlayer.currentTurn;

    useEffect(() => {
        if (isClicked) {
            setIsClicked(false);

            const moveIndex = diceCount === 2 ? dicesResult.first + dicesResult.second : dicesResult.first;

            move(moveIndex)
        }
    }, [dicesResult]);

    return (
        <group position={[0, 0, 0]}>
            <Dice
                index={1}
                setDicesResult={setDicesResult}
                position={[-1, 0, 0]}
                isRolling={isRolling}
            />
            {
                <Dice
                    index={2}
                    setDicesResult={setDicesResult}
                    position={[1, 0, 0]}
                    isRolling={isRolling}
                />
            }
        </group>
    );
}
