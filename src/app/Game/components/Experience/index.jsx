import { useEffect } from 'react';

import useMaterialsContext, {
    MaterialContext,
} from '@/hooks/useMaterialsContext.js';
import useGame from '@/stores/useGame';
import GameBoard from './GameBoard/GameBoard.jsx';
import Interface from '../Iterface/';

const Experience = () => {
    const initPlayers = useGame((state) => state.initPlayers);
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
