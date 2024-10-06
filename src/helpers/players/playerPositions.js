import * as THREE from 'three';

const fieldOffsets = {
    'RatRace': new THREE.Vector3(-9 * 3, 0, -9 * 3),
    'FastTrack': new THREE.Vector3(-9 * 5, 0, -9 * 5), // якщо є інший тип
};

export function calculatePlayerPosition(cellPosition, circleType) {
    const fieldOffset = fieldOffsets[circleType] || new THREE.Vector3(0, 0, 0);

    // Обчислюємо кінцеву позицію та коректуємо висоту
    const finalPosition = new THREE.Vector3().addVectors(cellPosition, fieldOffset);

    return finalPosition;
}

// -----------------------------------------------------------------------------

const box = new THREE.Box3();

export function alignPlayerYPosition(body) {
    if (!body.current) return;

    box.setFromObject(body.current);
    body.current.position.y += 0.32 - box.min.y;
}

export function adjustPlayerRotation(body, scene) {
    if (!body.current) return;

    const initialRotation = scene.rotation.clone();
    const box = new THREE.Box3().setFromObject(scene);

    // Знаходимо центр сцени та обчислюємо, який кут необхідно задати для повороту
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Встановлюємо початковий поворот, враховуючи центр сцени
    body.current.rotation.set(initialRotation.x, initialRotation.y + Math.PI / 2, initialRotation.z);

    console.log(scene.name);
    // Виправлення кута для фіксованих моделей (наприклад, для тих, що мають відмінний початковий поворот)
    if (scene.name !== 'egg') {
        body.current.rotation.y += Math.PI / 2;
    }
}

export function generateMovementPositions(currentCellIndex, moveIndex, cells) {
    return Array.from(
        { length: moveIndex },
        (_, i) => (currentCellIndex + (i + 1)) % cells.length
    ).map(index => cells[index].position);
}

// -----------------------------------------------------------------------------

export function updatePlayerMovementPath(players, currentPlayerId, movementPath, newCellIndex) {
    return players.map(player => {
        if (player.id === currentPlayerId) {
            return {
                ...player,
                movementPath,
                currentCellIndex: newCellIndex,
            };
        }
        return player;
    });
}