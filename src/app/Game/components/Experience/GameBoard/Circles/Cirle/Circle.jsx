export default function Circle({
    scale = 1,
    cells = [],
    position = [0, 0, 0],
}) {
    return (
        <group position={position}>
            {cells && cells.length > 0 && cells.map(({ Cell, ...rest }, index) => (
                <Cell scale={scale} key={index} {...rest} />
            ))}
        </group>
    );
}