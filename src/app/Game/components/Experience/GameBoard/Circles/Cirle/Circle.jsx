export default function Circle({
    scale = 1,
    cells = [],
    position = [0, 0, 0],
}) {
    return (
        <group position={position}>
            <mesh>
                {cells &&
                    cells.map(({ Cell, ...rest }, index) => {
                        return <Cell scale={scale} key={index} {...rest} />;
                    })}
            </mesh>
        </group>
    );
}
