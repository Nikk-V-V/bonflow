import {
    BankLoan,
    CarLoan,
    CreditCard,
    Mortgage,
    RetailDebt,
    SchoolLoan,
} from '../Liability/Liability.js';

export default class Player {
    constructor(userData) {
        Object.assign(this, {
            ...userData,
            currentTurn: {
                skipTurns: 0,
                circleType: 'RatRace',
                diceCount: 1,
            },
            currentCellIndex: 0,
        });

        // this.#calculateFinancialStatement();
    }

    /**
     * @name Setters
     */
    // set position(position) {
    //     this.#position = position;
    // }
    // set currentTurn(currentTurn) {
    //     this.#currentTurn = currentTurn;
    // }
    //
    // set assets(assets) {
    //     this.#financialStatement.assets = assets;
    //     this.#calculateFinancialStatement();
    // }
    //
    // set liabilities(liabilities) {
    //     this.#financialStatement.liabilities = liabilities;
    //     this.#calculateFinancialStatement();
    // }
    //
    // set financialStatement(financialStatement) {
    //     this.#financialStatement = financialStatement;
    // }

    /**
     * @name Getters
     * @description Getters for player properties
     */
    // get isSkippedTurn() {
    //     return this.#currentTurn.skipTurns > 0;
    // }
    //
    // get diceCount() {
    //     return this.#currentTurn.diceCount;
    // }
    //
    // get totalIncome() {
    //     return this.#profession.salary + this.#calculateTotalAssetCashFlow();
    // }

    // get playerDetails() {
    //     return {
    //         id: this.#id,
    //         name: this.#name,
    //         profession: this.#profession,
    //         financialStatement: this.#financialStatement,
    //         currentTurn: this.#currentTurn,
    //         model: this.#model,
    //         position: this.#position,
    //         currentCellIndex: this.#currentCellIndex,
    //     };
    // }

    /**
     * @name Static Methods
     * @description Static methods
     */
    static deserialize(parsedData) {
        return new Player({
            ...parsedData,
            financialStatement: {
                ...parsedData.financialStatement,
                liabilities: deserializeLiabilities(
                    parsedData.financialStatement.liabilities
                ),
            },
        });
    }

    /**
     * @name Public Methods
     */
    // decreaseSkipTurns() {
    //     this.#currentTurn.skipTurns -= 1;
    // }
    //
    move({ moveIndex, ratRaceCells, fastTrackCells, cellsScale }) {
        this.currentCellIndex = newCellIndex;
        this.movementPath = movementPath;
    }

    updatePosition(position, direction) {
        this.position = position;
        this.direction = direction;
    }

    /**
     * @name Private Methods
     * @description Private methods
     */
    // #calculateFinancialStatement() {
    //     this.#financialStatement = {
    //         ...this.#financialStatement,
    //         totalIncome: this.totalIncome,
    //         totalExpenses: this.#calculateMonthlyPayment(),
    //         cashFlow: this.#calculateCashFlow(),
    //     };
    // }
    //
    // #calculateCashFlow() {
    //     return this.totalIncome - this.#calculateMonthlyPayment();
    // }
    //
    // #calculateTotalAssetCashFlow() {
    //     return this.#financialStatement.assets.reduce(
    //         (totalCashFlow, asset) => totalCashFlow + asset.cashFlow,
    //         0
    //     );
    // }

    // #calculateMonthlyPayment() {
    //     const liabilityPayments = this.#financialStatement.liabilities.reduce(
    //         (totalPayment, liability) => {
    //             const monthlyPayment = liability.calculateMonthlyPayment();
    //             return (
    //                 totalPayment + (isNaN(monthlyPayment) ? 0 : monthlyPayment)
    //             );
    //         },
    //         0
    //     );
    //
    //     const childExpenses = this.#calculateChildExpenses();
    //
    //     return liabilityPayments + childExpenses;
    // }
    //
    // #calculateChildExpenses() {
    //     const numberOfChildren = this.#financialStatement.childrenCount || 0;
    //     const perChildExpense = this.#profession.perChildExpense || 0;
    //
    //     return numberOfChildren * perChildExpense;
    // }
}

export function calculatePositionOnCircle(index, totalCells, cellsScale) {
    const radius = cellsScale * 3;
    const angleStep = (2 * Math.PI) / totalCells;
    const angle = index * angleStep;

    // Обчислюємо позицію на основі кута
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);

    // Повертаємо координати, залишаючи Y на рівні 0
    return [-x, 0, -z];
}

function deserializeLiabilities(liabilitiesData) {
    return liabilitiesData.map(liability => {
        switch (liability.type) {
            case 'Mortgage':
                return new Mortgage(liability); // Передаємо тільки amount
            case 'Car Loans':
                return new CarLoan(liability); // Передаємо тільки amount
            case 'Credit Cards':
                return new CreditCard(liability); // Передаємо тільки amount
            case 'Retail Debt':
                return new RetailDebt(liability); // Передаємо тільки amount
            case 'School Loan':
                return new SchoolLoan(liability); // Передаємо тільки amount
            case 'Bank Loan':
                return new BankLoan(liability); // Передаємо тільки amount
            default:
                throw new Error(`Unknown liability type: ${liability.type}`);
        }
    });
}
