import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt, SchoolLoan } from '../Liability/Liability.js';

export default class Lawyer extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Lawyer',
                salary: 7500, // Місячна зарплата
                perChildExpense: 380, // Витрати на одну дитину
            },
            financialStatement: {
                cashFlow: 0,
                totalIncome: 0,
                totalExpenses: 0,
                childrenCount: 0, // Початкова кількість дітей
                assets: [
                    {
                        type: 'Savings',
                        amount: 400, // Заощадження
                    },
                ],
                liabilities: [
                    new Mortgage(115000), // Іпотека
                    new SchoolLoan(78000), // Студентський кредит
                    new CarLoan(11000), // Автокредит
                    new CreditCard(6000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
