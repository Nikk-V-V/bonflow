import Circle from '../Cirle/Circle.jsx';
import useGame from '@/stores/useGame.jsx';

export default function RatRace({}) {
    const ratRaceCells = useGame(state => state.ratRaceCells);
    const cellsScale = useGame(state => state.cellsScale);

    return (
        <Circle
            scale={cellsScale}
            cells={ratRaceCells}
            position={[-cellsScale * 3, 0, -cellsScale * 3]}
        />
    );
}
