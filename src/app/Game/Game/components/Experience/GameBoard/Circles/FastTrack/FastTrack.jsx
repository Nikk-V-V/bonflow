import Circle from '../Cirle/Circle.jsx';
import useGame from '../../../../../../../../stores/useGame.jsx';

export default function FastTrack() {
    const { cellsScale, fastTrackCells } = useGame(state => state);

    return (
        <>
            <Circle scale={cellsScale} cells={fastTrackCells} />
        </>
    );
}
