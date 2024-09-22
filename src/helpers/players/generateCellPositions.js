import * as THREE from 'three';
import Baby from '../../app/Game/Game/components/Experience/GameBoard/Cells/Baby.jsx';
import Risks from '../../app/Game/Game/components/Experience/GameBoard/Cells/Risks.jsx';
import Dream from '../../app/Game/Game/components/Experience/GameBoard/Cells/Dream.jsx';
import Market from '../../app/Game/Game/components/Experience/GameBoard/Cells/Market.jsx';
import Charity from '../../app/Game/Game/components/Experience/GameBoard/Cells/Charity.jsx';
import Doodad from '../../app/Game/Game/components/Experience/GameBoard/Cells/Doodad.jsx';
import Paycheck from '../../app/Game/Game/components/Experience/GameBoard/Cells/Paycheck.jsx';
import Investment from '../../app/Game/Game/components/Experience/GameBoard/Cells/Investment.jsx';
import Downsized from '../../app/Game/Game/components/Experience/GameBoard/Cells/Downsized.jsx';
import Opportunity from '../../app/Game/Game/components/Experience/GameBoard/Cells/Opportunity.jsx';

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
    const cellInPart = Math.floor(cellData.length / 4); // Округлюємо до цілого числа

    return cellData.map((cell, index) => {
        if (index < cellInPart) {
            // Перша частина: Рух по осі Z
            cell.position = new THREE.Vector3(0, 0, index * -scale);
        } else if (index < cellInPart * 2) {
            // Друга частина: Рух по осі X
            cell.position = new THREE.Vector3(
                -scale * (index - cellInPart),
                0,
                -scale * cellInPart
            );
        } else if (index < cellInPart * 3) {
            // Третя частина: Рух по осі Z у зворотному напрямку
            cell.position = new THREE.Vector3(
                -scale * cellInPart,
                0,
                -scale * cellInPart + (index - cellInPart * 2) * scale
            );
        } else {
            // Четверта частина: Рух по осі X у зворотному порядку
            cell.position = new THREE.Vector3(
                -scale * (cellInPart * 4 - index),
                0,
                0
            );
        }

        return {
            ...cell,
            scale,
            Cell: cellMap.get(cell.type),
        };
    });
}
