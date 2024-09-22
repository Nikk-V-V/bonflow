export function saveStateToLocalStorage(state) {
    localStorage.setItem('gameState', JSON.stringify(state));
}

export function restorePlayersFromLocalStorage() {
    const storedState = localStorage.getItem('gameState');
    if (storedState) {
        const parsedState = JSON.parse(storedState);
        return parsedState.players;
    }
    return [];
}
