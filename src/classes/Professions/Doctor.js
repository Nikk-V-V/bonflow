import Player from '../Player/Player.js';
import { CarLoan, CreditCard, Mortgage, RetailDebt, SchoolLoan } from '../Liability/Liability.js';

export default class Doctor extends Player {
    constructor(playerData) {
        super({
            ...playerData,
            profession: {
                title: 'Doctor (MD)',
                salary: 13200, // Місячна зарплата
                perChildExpense: 640, // Витрати на одну дитину
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
                    new Mortgage(202000), // Іпотека
                    new SchoolLoan(150000), // Студентський кредит
                    new CarLoan(19000), // Автокредит
                    new CreditCard(9000), // Кредитні картки
                    new RetailDebt(1000), // Роздрібний кредит
                ],
            },
        });
    }
}
