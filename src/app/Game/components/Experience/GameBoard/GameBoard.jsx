import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Stats as DreiStats } from '@react-three/drei';
import EnhancedLights from '../EnhancedLights/';
import Players from '../Players/';
import Circles from './Circles/'

export default function GameBoard() {
    return (
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
            }}
        >
            <EnhancedLights/>
            <Physics gravity={[0, -9.81, 0]} debug={false}>
                <Players />
                <Circles/>
            </Physics>
            <DreiStats showPanel={0} className="fps-stats" />
        </Canvas>
    );
}
