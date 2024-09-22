import * as THREE from 'three';

export function calculatePlayerPosition(cellPosition, circleType, cellsScale = 9) {
    // Визначаємо зміщення поля
    let fieldOffset = new THREE.Vector3(0, 0, 0);
    if (circleType === 'RatRace') {
        fieldOffset = new THREE.Vector3(-cellsScale * 3, 0, -cellsScale * 3);
    }

    // Обчислюємо кінцеву позицію
    return new THREE.Vector3(
        cellPosition.x + fieldOffset.x,
        cellPosition.y + fieldOffset.y,
        cellPosition.z + fieldOffset.z
    );
}


export function alignPlayerYPosition(body) {
    const box = new THREE.Box3().setFromObject(body.current);

    body.current.position.y += 0.32 - box.min.y;
}