import AirlinePilot from '../../classes/Professions/AirlinePilot';
import BusinessManager from '../../classes/Professions/BusinessManager';
import Doctor from '../../classes/Professions/Doctor';
import Engineer from '../../classes/Professions/Engineer';
import Janitor from '../../classes/Professions/Janitor';
import Lawyer from '../../classes/Professions/Lawyer';
import Mechanic from '../../classes/Professions/Mechanic';
import Nurse from '../../classes/Professions/Nurse';
import Secretary from '../../classes/Professions/Secretary';
import Teacher from '../../classes/Professions/Teacher';
import TruckDriver from '../../classes/Professions/TruckDriver';
import PoliceOfficer from '../../classes/Professions/PoliceOffices.js';

export function createTruckDriver(player) {
    return new TruckDriver(player);
}

export function createTeacher(player) {
    return new Teacher(player);
}

export function createSecretary(player) {
    return new Secretary(player);
}

export function createPoliceOfficer(player) {
    return new PoliceOfficer(player);
}

export function createNurse(player) {
    return new Nurse(player);
}

export function createMechanic(player) {
    return new Mechanic(player);
}

export function createLawyer(player) {
    return new Lawyer(player);
}

export function createJanitor(player) {
    return new Janitor(player);
}

export function createEngineer(player) {
    return new Engineer(player);
}

export function createDoctor(player) {
    return new Doctor(player);
}

export function createBusinessManager(player) {
    return new BusinessManager(player);
}

export function createAirlinePilot(player) {
    return new AirlinePilot(player);
}
