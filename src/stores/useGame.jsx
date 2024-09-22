import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import RatRaceCellsData from '../Data/RatRace/RatRaceCellsData.jsx';
import FastTrackCellsData from '../Data/FastTrack/FastTrackCellsData.jsx';
import generateCellPositions from '../helpers/players/generateCellPositions.js';
import userActions from './userActions.jsx';
import cardsActions from './cardsActions.jsx';

const cellsScale = 9;

const models = ['/models/player/cat.glb', '/models/player/wolf.glb'];

export default create(
    subscribeWithSelector((set, get) => ({
        cellsScale,
        endTime: null,
        startTime: null,
        ratRaceCells: generateCellPositions(RatRaceCellsData, cellsScale),
        fastTrackCells: generateCellPositions(FastTrackCellsData, cellsScale),

        ...(userActions(set, get)),
        ...(cardsActions(set, get)),

        // syncStateWithLocalStorage: () => syncStateWithLocalStorage(get, set),
    }))
);
