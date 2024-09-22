import React from 'react';
import { Progress } from '@components/ui/Progress.jsx';

export default function General({ player }) {
    const { financialStatement, profession } = player;

    return (
        <div className="space-y-4">
            <div>
                <div className="flex justify-between gap-2 mb-2">
                    <span>Професія:</span>
                    <span>{profession.title}</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between gap-2 mb-2">
                    <span>Зарплата:</span>
                    <span>${profession.salary}</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between gap-2 mb-2">
                    <span>Витрати на дитину:</span>
                    <span>${profession.perChildExpense}</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-2">
                    <span>Грошовий потік:</span>
                    <span>${financialStatement.cashFlow}</span>
                </div>
                <Progress
                    value={(financialStatement.cashFlow / 20000) * 100}
                    className="h-2 bg-gray-700"
                    indicatorClassName="bg-purple-600"
                />
            </div>
            <div>
                <div className="flex justify-between mb-2">
                    <span>Місячний прибуток:</span>
                    <span>${financialStatement.totalIncome}</span>
                </div>
                <Progress
                    value={(financialStatement.totalIncome / 10000) * 100}
                    className="h-2 bg-gray-700"
                    indicatorClassName="bg-orange-600"
                />
            </div>
            <div>
                <div className="flex justify-between mb-2">
                    <span>Місячні витрати:</span>
                    <span>${financialStatement.totalExpenses}</span>
                </div>
                <Progress
                    value={(financialStatement.totalExpenses / 10000) * 100}
                    className="h-2 bg-gray-700"
                    indicatorClassName="bg-red-600"
                />
            </div>
        </div>
    );
}
