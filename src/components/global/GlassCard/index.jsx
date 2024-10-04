import { Card } from '../../ui/Card.jsx';
import { cn } from '@/lib/utils.js';

export default function GlassCard({ children, className }) {
    return (
        <Card
            className={cn(
                className,
                'rounded-2xl bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-4xl bg-opacity-40'
            )}
        >
            {children}
        </Card>
    );
}
