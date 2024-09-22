import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import UserIcon from '../UserIcon/index.jsx';
import PlayerWindow from '../PlayerWindow/index.jsx';
import useGame from '../../../../../../stores/useGame.jsx';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@components/ui/Tooltip.jsx';

export default function TopPanel({}) {
    const { players, turnPlayerIndex } = useGame();

    const [openWindows, setOpenWindows] = useState([]);

    const togglePlayerWindow = player => {
        setOpenWindows(prevWindows => {
            const existingWindow = prevWindows.find(w => w.id === player.id);
            if (existingWindow) {
                return prevWindows.filter(w => w.id !== player.id);
            } else {
                const newWindow = {
                    ...player,
                    position: {
                        x: window.innerWidth - (300 + prevWindows.length * 100),
                        y: 0,
                    },
                };
                return [...prevWindows, newWindow];
            }
        });
    };

    const closePlayerWindow = playerId => {
        setOpenWindows(openWindows.filter(w => w.id !== playerId));
    };

    const getPlayerDetails = player => {
        const { financialStatement, name } = player;

        return (
            <div className="text-sm">
                <p>{name}</p>
                <p>Кеш флоу: ${financialStatement.cashFlow}</p>
                <p>Заробіток: ${financialStatement.totalIncome}</p>
                <p>Витрати: ${financialStatement.totalExpenses}</p>
            </div>
        );
    };

    return (
        <div className="fixed top-0 z-10 flex text-white p-6">
            <div className="flex gap-4">
                <TooltipProvider>
                    {players &&
                        players.map((player, index) => (
                            <Tooltip key={player.id}>
                                <TooltipTrigger asChild>
                                    <button
                                        className={`relative rounded-full ${index === turnPlayerIndex ? 'ring-2 ring-purple-500' : ''} ${
                                            openWindows.some(
                                                w => w.id === player.id
                                            )
                                                ? 'bg-purple-500'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            togglePlayerWindow(player)
                                        }
                                    >
                                        <UserIcon path={player.model.avatar} />
                                        {index === turnPlayerIndex && (
                                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
                                        )}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    {getPlayerDetails(player)}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                </TooltipProvider>
            </div>
            <div className="flex-grow static">
                <AnimatePresence>
                    {openWindows &&
                        openWindows.map(player => (
                            <PlayerWindow
                                key={player.id}
                                player={player}
                                onClose={() => closePlayerWindow(player.id)}
                                initialPosition={player.position}
                            />
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
