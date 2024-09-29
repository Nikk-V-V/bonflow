import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils.js';

const createAvatarComponent = (PrimitiveComponent, defaultClassName) => {
    const Component = React.forwardRef(({ className, ...props }, ref) => (
        <PrimitiveComponent
            ref={ref}
            className={cn(defaultClassName, className)}
            {...props}
        />
    ));
    Component.displayName = PrimitiveComponent.displayName;
    return Component;
};

const Avatar = createAvatarComponent(
    AvatarPrimitive.Root,
    'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
);
const AvatarImage = createAvatarComponent(
    AvatarPrimitive.Image,
    'aspect-square h-full w-full'
);
const AvatarFallback = createAvatarComponent(
    AvatarPrimitive.Fallback,
    'flex h-full w-full items-center justify-center rounded-full bg-muted'
);

export { Avatar, AvatarImage, AvatarFallback };
