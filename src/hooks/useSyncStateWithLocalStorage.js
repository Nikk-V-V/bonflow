import { useEffect } from 'react';
import useGame from '../stores/useGame.jsx';

const useSyncStateWithLocalStorage = () => {
    const { syncStateWithLocalStorage } = useGame();

    useEffect(() => {
        syncStateWithLocalStorage();

        // Слухати зміни в LocalStorage
        const handleStorageChange = event => {
            if (event.key === 'gameState') {
                syncStateWithLocalStorage();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [syncStateWithLocalStorage]);
};
export default useSyncStateWithLocalStorage;
