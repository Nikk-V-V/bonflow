import Circle from '../Cirle/Circle.jsx';
import useGame from '../../../../stores/useGame.jsx';

export default function RatRace({}) {
    const { cellsScale, ratRaceCells } = useGame(state => state);

    return (
        <Circle
            scale={cellsScale}
            cells={ratRaceCells}
            position={[-cellsScale * 3, 0, -cellsScale * 3]}
        />
    );
}
