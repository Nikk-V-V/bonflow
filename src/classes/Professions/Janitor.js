import Player from '../Player/Player.js';
import {
    CarLoan,
    CreditCard,
    Mortgage,
    RetailDebt,
} from '../Liability/Liability.js';

export default class Janitor extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Janitor',
                salary: 1600, // Місячна зарплата
                perChildExpense: 70, // Витрати на одну дитину
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0, // Початкова кількість дітей
                assets: [
                    {
                        type: 'Savings',
                        amount: 560, // Заощадження
                    },
                ],
                liabilities: [
                    new Mortgage(20000), // Іпотека
                    new CarLoan(4000), // Автокредит
                    new CreditCard(2000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
