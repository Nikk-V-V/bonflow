// -----------------------------------------------------------------------------

import * as THREE from 'three';1
import { calculatePlayerPosition, generateMovementPositions, updatePlayerMovementPath } from '@/helpers/players/playerPositions.js';
import getPlayerProfession from '@/helpers/players/getPlayerProfession.js';
import { saveStateToLocalStorage } from '@/helpers/serialize.js';
import PLAYERS_DATA from '@/constants/PLAYERS_DATA.jsx';

export default function (set, get) {
    return {
        turnPlayerIndex: 0,
        players: [],
        getCurrentPlayer: () => get().players[get().turnPlayerIndex],
        savePlayers: players => set({ players }),

        // -----------------------------------------------------------------------------
        move: moveIndex => {
            set(state => {
                const {
                    getCurrentPlayer,
                    ratRaceCells,
                    fastTrackCells,
                    cellsScale,
                    turnPlayerIndex
                } = state;
                const currentPlayer = getCurrentPlayer();
                if (!currentPlayer) return state;

                const circleType = currentPlayer.currentTurn.circleType;
                const cells = circleType === 'RatRace' ? ratRaceCells : fastTrackCells;
                const totalCells = cells.length;
                const currentCellIndex = currentPlayer.currentCellIndex;

                let newCellIndex = (currentCellIndex + moveIndex) % totalCells;
                const movementPositions = generateMovementPositions(currentCellIndex, moveIndex, cells);

                const tempVector = new THREE.Vector3();
                const offsetX = (turnPlayerIndex % 2 === 0 ? 1 : -1) * (turnPlayerIndex + 1) * 0.4; // Приклад зміщення для кожного гравця
                const offsetY = (turnPlayerIndex % 2 === 0 ? 1 : -1) * (turnPlayerIndex + 1) * 0.4; // Приклад зміщення для кожного гравця

                const movementPath = movementPositions.map(position => {
                    tempVector.set(position.x + offsetX, currentPlayer.position.y, position.z + offsetY);
                    return calculatePlayerPosition(tempVector, circleType, cellsScale);
                });

                const updatedPlayers = updatePlayerMovementPath(state.players, currentPlayer.id, movementPath, newCellIndex);

                const newState = {
                    ...state,
                    players: updatedPlayers,
                };

                saveStateToLocalStorage(newState);

                return newState;
            });
        },

        // -----------------------------------------------------------------------------

        processMove: () => {
            const {
                ratRaceCells,
                fastTrackCells,
                getCurrentPlayer,
                handleCard,
                resetMovingPath,
                nextTurn
            } = get();
            const currentPlayer = getCurrentPlayer();

            const cellIndex = currentPlayer.currentCellIndex;
            const circleType = currentPlayer.currentTurn.circleType;
            const cells = circleType === 'RatRace' ? ratRaceCells : fastTrackCells;

            const currentCell = cells[cellIndex];

            resetMovingPath(currentPlayer.id);
            handleCard(currentCell);
            nextTurn()
        },

        // -----------------------------------------------------------------------------

        nextTurn: () => {
            set(state => {
                const nextPlayerIndex = (state.turnPlayerIndex + 1) % state.players.length;
                return { ...state, turnPlayerIndex: nextPlayerIndex };
            });
        },

        // -----------------------------------------------------------------------------

        updatePlayerPosition: (playerId, position, direction) => {
            get().updatePlayerById(playerId, { position, direction });
        },

        // -----------------------------------------------------------------------------

        resetMovingPath: (playerId) => {
            get().updatePlayerById(playerId, { movementPath: [] });
        },

        // -----------------------------------------------------------------------------

        updatePlayerById: (playerId, data = {}) => {
            set(state => ({
                players: state.players.map(player =>
                    player.id === playerId ? { ...player, ...data } : player
                )
            }));
        },

        // -----------------------------------------------------------------------------

        initPlayers: () => {
            const { savePlayers, cellsScale } = get();

            let players = PLAYERS_DATA;

            const circleType = 'RatRace';
            const cells = circleType === 'RatRace' ? get().ratRaceCells : get().fastTrackCells;

            const initialCellIndex = 0;
            const initialCell = cells[initialCellIndex];
            const cellPosition = new THREE.Vector3(
                initialCell.position.x,
                initialCell.position.y,
                initialCell.position.z
            );

            const initialPosition = calculatePlayerPosition(cellPosition, circleType, cellsScale);

            players = players.map((player, index) => {
                const createProfession = getPlayerProfession(index);
                const offsetX = (index % 2 === 0 ? 1 : -1) * (index + 1) * 0.4; // Приклад зміщення для кожного гравця
                const offsetZ = (index % 2 === 0 ? 1 : -1) * (index + 1) * 0.4; // Приклад зміщення для кожного гравця

                return createProfession({
                    id: player.id,
                    name: player.name,
                    model: player.model,
                    movementPath: [],
                    position: new THREE.Vector3(
                        initialPosition.x + offsetX,
                        initialPosition.y,
                        initialPosition.z + offsetZ
                    ),
                });
            });

            savePlayers(players);
        },
    }
}