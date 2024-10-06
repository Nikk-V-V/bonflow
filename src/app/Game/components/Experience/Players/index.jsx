import { shallow } from 'zustand/shallow';
import useCameraController from '@/hooks/useCameraController.jsx';
import useGame from '@/stores/useGame.jsx';
import Player from './Player.jsx';


export default function Players({}) {
    const players = useGame(state => state.players, shallow);

    useCameraController();

    return (
        <>
            <group position={[0, 0, 0]}>
                {players.length > 0 &&
                    players.map(player => {
                        return <Player key={player.id} player={player} />;
                    })}
            </group>
        </>
    );
}
