import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Lights from './Lights/Lights.jsx';
import Players from './Players';
import RatRace from './Circles/RatRace/RatRace.jsx';
import FastTrack from './Circles/FastTrack/FastTrack.jsx';
import { OrbitControls } from '@react-three/drei';

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
            <color args={['#000000']} attach="background" />
            <Physics gravity={[0, -9.81, 0]} debug={false}>
                <OrbitControls/>
                <Lights />
                <RatRace />
                <FastTrack />
                <Players />
            </Physics>
        </Canvas>
    );
}
