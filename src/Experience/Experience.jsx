import Interface from './Iterface/';
import useMaterialsContext, { MaterialContext } from '../hooks/useMaterialsContext.js';
import GameBoard from './GameBoard/GameBoard.jsx';
import useGame from '../stores/useGame.jsx';
import { useEffect } from 'react';

const Experience = () => {
    const { initPlayers } = useGame();
    const context = useMaterialsContext();

    useEffect(() => {
        initPlayers();
    }, [initPlayers]);

    return (
        <MaterialContext.Provider value={context}>
            <Interface>
                <GameBoard />
            </Interface>
        </MaterialContext.Provider>
    );
};
export default Experience;
