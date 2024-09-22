import { cn } from '../../../libs/utils.js';

export default function BackdropGradient({ children, className, container }) {
    return (
        <div className={cn('relative w-full flex flex-col', container)}>
            <div
                className={cn(
                    'absolute rounded-[50%] radial--blur mx-10',
                    className
                )}
            />
            {children}
        </div>
    );
}
