import { Progress } from '../../../../components/ui/Progress.jsx';

export default function Assets({player}) {
    return (
        <div className="space-y-4">
            {player.assets?.map((asset, index) => (
                <div key={index}>
                    <div className="flex justify-between mb-2">
                        <span>{asset.name}</span>
                        <span>${asset.value}</span>
                    </div>
                    <Progress
                        value={(asset.value / 200000) * 100}
                        className="h-2 bg-gray-700"
                        indicatorClassName="bg-blue-500"
                    />
                </div>
            ))}
        </div>
    );
}