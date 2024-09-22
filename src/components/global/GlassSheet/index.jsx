import React from 'react';
import { cn } from '../../../libs/utils.js';

export default function GlassSheet({
    children,
    trigger,
    className,
    triggerClass,
}) {
    return (
        <Sheet>
            <SheetTrigger className={cn(triggerClass)} asChild>
                {trigger}
            </SheetTrigger>
            <SheetContent
                className={cn(
                    'bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray',
                    className
                )}
            >
                {children}
            </SheetContent>
        </Sheet>
    );
}
