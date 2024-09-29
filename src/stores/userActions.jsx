import * as THREE from 'three';
import { calculatePlayerPosition } from '@/helpers/players/playerPositions.js';
import getPlayerProfession from '@/helpers/players/getPlayerProfession.js';
import { saveStateToLocalStorage } from '@/helpers/serialize.js';
import PLAYERS_DATA from '@/constants/PLAYERS_DATA.jsx';


export default function (set, get) {
    return {
        turnPlayerIndex: 0,
        players: [],
        getCurrentPlayer: () => get().players[get().turnPlayerIndex],
        savePlayers: players => set({ players }),
        move: moveIndex => {
            set(state => {
                const {
                    getCurrentPlayer,
                    ratRaceCells,
                    fastTrackCells,
                    cellsScale,
                } = state;
                const currentPlayer = getCurrentPlayer();
                if (!currentPlayer) return state;

                const circleType = currentPlayer.currentTurn.circleType;
                const cells =
                    circleType === 'RatRace' ? ratRaceCells : fastTrackCells;
                const totalCells = cells.length;
                const currentCellIndex = currentPlayer.currentCellIndex;

                let newCellIndex = (currentCellIndex + moveIndex) % totalCells;
                const movementPositions = Array.from(
                    { length: moveIndex },
                    (_, i) => (currentCellIndex + (i + 1)) % totalCells
                ).map(index => cells[index].position);

                const movementPath = movementPositions.map(position => {
                    const cellPosition = new THREE.Vector3(
                        position.x,
                        position.y,
                        position.z
                    );
                    return calculatePlayerPosition(
                        cellPosition,
                        circleType,
                        cellsScale
                    );
                });

                const updatedPlayers = state.players.map(player => {
                    if (player.id === currentPlayer.id) {
                        return {
                            ...player,
                            movementPath,
                            currentCellIndex: newCellIndex,
                        };
                    }
                    return player;
                });

                const newState = {
                    ...state,
                    players: updatedPlayers,
                };

                saveStateToLocalStorage(newState);

                return newState;
            });
        },
        processMove: () => {
            const {
                ratRaceCells,
                fastTrackCells,
                getCurrentPlayer,
                handleCard,
                nextTurn,
            } = get();
            const currentPlayer = getCurrentPlayer();

            const cellIndex = currentPlayer.currentCellIndex;
            const circleType = currentPlayer.currentTurn.circleType;
            const cells =
                circleType === 'RatRace' ? ratRaceCells : fastTrackCells;

            const currentCell = cells[cellIndex];

            handleCard(currentCell);
            nextTurn();
        },
        nextTurn: () => {
            set(state => {
                const nextPlayerIndex =
                    (state.turnPlayerIndex + 1) % state.players.length;
                return { ...state, turnPlayerIndex: nextPlayerIndex };
            });
        },
        updatePlayerPosition: (playerId, position, direction) => {
            set(state => {
                const updatedPlayers = state.players.map(player => {
                    if (player.id === playerId) {
                        return {
                            ...player,
                            position: position,
                            direction: direction,
                        };
                    }
                    return player;
                });
                return { ...state, players: updatedPlayers };
            });
        },
        initPlayers: () => {
            const { savePlayers, cellsScale } = get();

            let players = PLAYERS_DATA;

            const circleType = 'RatRace';
            const cells =
                circleType === 'RatRace'
                    ? get().ratRaceCells
                    : get().fastTrackCells;

            const initialCellIndex = 0;
            const initialCell = cells[initialCellIndex];
            const cellPosition = new THREE.Vector3(
                initialCell.position.x,
                initialCell.position.y,
                initialCell.position.z
            );

            const initialPosition = calculatePlayerPosition(
                cellPosition,
                circleType,
                cellsScale
            );

            players = players.map((player, index) => {
                const createProfession = getPlayerProfession(index);
                return createProfession({
                    id: player.id,
                    name: player.name,
                    model: player.model,
                    movementPath: [],
                    position: initialPosition,
                });
            });

            savePlayers(players);
        },
    };
}
