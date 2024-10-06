import Circle from '../Cirle/Circle.jsx';
import useGame from '@/stores/useGame.jsx';

export default function FastTrack() {
    const fastTrackCells = useGame(state => state.fastTrackCells);
    const cellsScale = useGame(state => state.cellsScale);

    return (
        <>
            <Circle scale={cellsScale} cells={fastTrackCells} />
        </>
    );
}
