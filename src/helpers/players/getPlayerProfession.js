import {
    createAirlinePilot,
    createBusinessManager,
    createDoctor,
    createEngineer,
    createJanitor,
    createLawyer,
    createMechanic,
    createNurse,
    createPoliceOfficer,
    createSecretary,
    createTeacher,
    createTruckDriver,
} from './createPlayers.js';


let professions = [
    createAirlinePilot,
    createBusinessManager,
    createDoctor,
    createSecretary,
    createTruckDriver,
    createEngineer,
    createJanitor,
    createTeacher,
    createPoliceOfficer,
    createNurse,
    createLawyer,
    createMechanic
];

professions = shuffleArray(professions);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export default index => {
    return professions[index];
};
