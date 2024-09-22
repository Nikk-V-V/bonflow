import { useEffect } from 'react';
import useGame from '../stores/useGame.jsx';

const useTurnHandler = () => {
    const { players, turnPlayerIndex, nextTurn } = useGame();

    const checkTurn = currentPlayer => {};

    useEffect(() => {
        if (players.length === 0) return;

        const currentPlayer = players[turnPlayerIndex];
        checkTurn(currentPlayer);
    }, [turnPlayerIndex]);
};
export default useTurnHandler;
