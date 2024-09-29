import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import userActions from './userActions.jsx';
import cardsActions from './cardsActions.jsx';
import generateCellPositions from '@/helpers/players/generateCellPositions.js';
import FastTrackCellsData from '@/constants/FastTrack/FastTrackCellsData.jsx';
import RatRaceCellsData from '@/constants/RatRace/RatRaceCellsData.jsx';

const cellsScale = 9;

export default create(
    subscribeWithSelector((set, get) => ({
        cellsScale,
        endTime: null,
        startTime: null,
        ratRaceCells: generateCellPositions(RatRaceCellsData, cellsScale),
        fastTrackCells: generateCellPositions(FastTrackCellsData, cellsScale),

        ...userActions(set, get),
        ...cardsActions(set, get),

        // syncStateWithLocalStorage: () => syncStateWithLocalStorage(get, set),
    }))
);
