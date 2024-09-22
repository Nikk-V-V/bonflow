import { useEffect } from 'react';
import GameBoard from './GameBoard/GameBoard.jsx';
import Interface from '../Iterface/index.jsx';
import useGame from '../../../../../stores/useGame.jsx';
import useMaterialsContext, {
    MaterialContext,
} from '../../../../../hooks/useMaterialsContext.js';

const Index = () => {
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
export default Index;
