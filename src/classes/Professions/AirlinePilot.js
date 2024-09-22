import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt } from '../Liability/Liability.js';

export default class AirlinePilot extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Airline Pilot',
                salary: 9500,
                perChildExpense: 500,
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0,
                assets: [
                    {
                        type: 'Savings',
                        amount: 400,
                    },
                ],
                liabilities: [
                    new Mortgage(143000),
                    new CarLoan(15000),
                    new CreditCard(22000),
                    new RetailDebt(1000),
                ],
            },
        });
    }
}
