class Liability {
    constructor(type, amount, percentage) {
        this.type = type;
        this.amount = amount;
        this.percentage = percentage;
    }

    calculateMonthlyPayment(years) {
        const monthlyRate = this.percentage / 12;
        const months = years * 12;

        return (
            (this.amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        );
    }
}

export class Mortgage extends Liability {
    constructor(amount) {
        super('Mortgage', amount, 0.06); // Фіксована процентна ставка для іпотеки
    }

    calculateMonthlyPayment() {
        return super.calculateMonthlyPayment(30); // Іпотека зазвичай на 30 років
    }
}

export class CarLoan extends Liability {
    constructor(amount) {
        super('Car Loans', amount, 0.07);
    }

    calculateMonthlyPayment() {
        return super.calculateMonthlyPayment(5);
    }
}

export class CreditCard extends Liability {
    constructor(amount) {
        super('Credit Cards', amount, 0.18);
    }

    calculateMonthlyPayment() {
        return super.calculateMonthlyPayment(5);
    }
}

export class RetailDebt extends Liability {
    constructor(amount) {
        super('Retail Debt', amount, 0.05);
    }

    calculateMonthlyPayment() {
        return super.calculateMonthlyPayment(3);
    }
}

export class SchoolLoan extends Liability {
    constructor(amount) {
        super('School Loan', amount, 0.05);
    }

    calculateMonthlyPayment() {
        return super.calculateMonthlyPayment(10);
    }
}

export class BankLoan extends Liability {
    constructor(amount) {
        super('Bank Loan', amount, 0.1);
    }

    calculateMonthlyPayment() {
        return (this.amount / 1000) * 100;
    }
}
