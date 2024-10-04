import Player from './Player.jsx';
import useGame from '@/stores/useGame.jsx';
import useCameraController from '@/hooks/useCameraController.jsx';

export default function Players({}) {
    const { players } = useGame(state => state);

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
