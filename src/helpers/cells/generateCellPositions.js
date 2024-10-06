import * as THREE from 'three';
import Baby from '@/app/Game/components/Experience/GameBoard/Cells/Baby.jsx';
import Risks from '@/app/Game/components/Experience/GameBoard/Cells/Risks.jsx';
import Dream from '@/app/Game/components/Experience/GameBoard/Cells/Dream.jsx';
import Market from '@/app/Game/components/Experience/GameBoard/Cells/Market.jsx';
import Charity from '@/app/Game/components/Experience/GameBoard/Cells/Charity.jsx';
import Doodad from '@/app/Game/components/Experience/GameBoard/Cells/Doodad.jsx';
import Paycheck from '@/app/Game/components/Experience/GameBoard/Cells/Paycheck.jsx';
import Investment from '@/app/Game/components/Experience/GameBoard/Cells/Investment.jsx';
import Downsized from '@/app/Game/components/Experience/GameBoard/Cells/Downsized.jsx';
import Opportunity from '@/app/Game/components/Experience/GameBoard/Cells/Opportunity.jsx';

const cellMap = new Map([
    ['Baby', Baby],
    ['Risks', Risks],
    ['Dream', Dream],
    ['Market', Market],
    ['Charity', Charity],
    ['Doodad', Doodad],
    ['Paycheck', Paycheck],
    ['Income', Paycheck],
    ['Investment', Investment],
    ['Downsized', Downsized],
    ['Opportunity', Opportunity],
]);

export default function generateCellPositions(cellData, scale) {
    const calculatePosition = (index, totalCells, scale) => {
        const perimeter = Math.floor(totalCells / 4);
        const part = Math.floor(index / perimeter);
        const offset = index % perimeter;

        switch (part) {
            case 0:
                return new THREE.Vector3(0, 0, offset * -scale); // First part: Movement along Z axis
            case 1:
                return new THREE.Vector3(-scale * offset, 0, -scale * perimeter); // Second part: Movement along X axis
            case 2:
                return new THREE.Vector3(-scale * perimeter, 0, -scale * perimeter + offset * scale); // Third part: Movement along Z axis in reverse direction
            case 3:
                return new THREE.Vector3(-scale * (perimeter - offset), 0, 0); // Fourth part: Movement along X axis in reverse order
            default:
                return new THREE.Vector3(0, 0, 0);
        }
    };

    return cellData.map((cell, index) => {
        const position = calculatePosition(index, cellData.length, scale);

        return {
            ...cell,
            scale,
            Cell: cellMap.get(cell.type),
            position,
        };
    });
}