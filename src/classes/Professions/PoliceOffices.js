import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt } from '../Liability/Liability.js';

export default class PoliceOfficer extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Police Officer',
                salary: 3000, // Місячна зарплата
                perChildExpense: 160, // Витрати на одну дитину
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0, // Початкова кількість дітей
                assets: [
                    {
                        type: 'Savings',
                        amount: 520, // Заощадження
                    },
                ],
                liabilities: [
                    new Mortgage(46000), // Іпотека
                    new CarLoan(5000), // Автокредит
                    new CreditCard(2000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
