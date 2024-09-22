import Player from '../Player/Player.js';
import {
    CarLoan,
    CreditCard,
    Mortgage,
    RetailDebt,
    SchoolLoan,
} from '../Liability/Liability.js';

export default class Nurse extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Nurse',
                salary: 3100, // Місячна зарплата
                perChildExpense: 170, // Витрати на одну дитину
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0, // Початкова кількість дітей
                assets: [
                    {
                        type: 'Savings',
                        amount: 480, // Заощадження
                    },
                ],
                liabilities: [
                    new Mortgage(47000), // Іпотека
                    new SchoolLoan(6000), // Студентський кредит
                    new CarLoan(5000), // Автокредит
                    new CreditCard(3000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
