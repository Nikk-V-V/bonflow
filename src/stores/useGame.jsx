import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import generateCellPositions from '@/helpers/cells/generateCellPositions.js';
import FastTrackCellsData from '@/constants/FastTrack/FastTrackCellsData.jsx';
import RatRaceCellsData from '@/constants/RatRace/RatRaceCellsData.jsx';
import playerActions from './playerActions.jsx';
import cardsActions from './cardsActions.jsx';
import modalsActions from './modalsActions.jsx';

const cellsScale = 9;

export default create(
    subscribeWithSelector((set, get) => ({
        cellsScale,
        endTime: null,
        startTime: null,
        ratRaceCells: generateCellPositions(RatRaceCellsData, cellsScale),
        fastTrackCells: generateCellPositions(FastTrackCellsData, cellsScale),

        ...playerActions(set, get),
        ...cardsActions(set, get),
        ...modalsActions(set, get),

        // syncStateWithLocalStorage: () => syncStateWithLocalStorage(get, set),
    }))
);
