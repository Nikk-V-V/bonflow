import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt } from '../Liability/Liability.js';

export default class Mechanic extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Mechanic',
                salary: 2000, // Місячна зарплата
                perChildExpense: 110, // Витрати на одну дитину
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0, // Початкова кількість дітей
                assets: [
                    {
                        type: 'Savings',
                        amount: 670, // Заощадження
                    },
                ],
                liabilities: [
                    new Mortgage(31000), // Іпотека
                    new CarLoan(3000), // Автокредит
                    new CreditCard(2000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
