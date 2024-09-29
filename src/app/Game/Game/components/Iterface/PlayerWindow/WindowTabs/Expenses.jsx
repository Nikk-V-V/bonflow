import { Progress } from '@/components/ui/Progress.jsx';

export default function Expenses({ player }) {
    return (
        <div className="space-y-4">
            {player.expenses?.map((expense, index) => (
                <div key={index}>
                    <div className="flex justify-between mb-2">
                        <span>{expense.name}</span>
                        <span>${expense.value}</span>
                    </div>
                    <Progress
                        value={(expense.value / 200000) * 100}
                        className="h-2 bg-gray-700"
                        indicatorClassName="bg-red-500"
                    />
                </div>
            ))}
        </div>
    );
}
