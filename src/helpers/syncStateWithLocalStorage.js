export default function (get, set) {
    const storedState = localStorage.getItem('gameState');
    if (storedState) {
        try {
            const parsedState = JSON.parse(storedState);

            if (
                parsedState &&
                parsedState.players &&
                Array.isArray(parsedState.players)
            ) {
                set({
                    players: parsedState.players,
                });
            } else {
                console.warn('Stored state is invalid or missing users');
            }
        } catch (error) {
            console.error('Error parsing stored state:', error);
        }
    }
}
