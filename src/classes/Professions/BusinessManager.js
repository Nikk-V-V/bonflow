import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt, SchoolLoan } from '../Liability/Liability.js';

export default class BusinessManager extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Business Manager',
                salary: 4600, // Місячна зарплата
                perChildExpense: 240, // Витрати на одну дитину
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
                    new Mortgage(75000), // Іпотека
                    new SchoolLoan(12000), // Студентський кредит
                    new CarLoan(6000), // Автокредит
                    new CreditCard(3000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
