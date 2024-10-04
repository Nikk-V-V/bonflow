import React from 'react';

export default function EnhancedCard({ children, className = '' }) {
    return (
        <div className={`relative ${className}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 opacity-20 blur-xl rounded-xl" />

            {/* Card content with animated border */}
            <div className="relative rounded-xl overflow-hidden">
                {/* Animated border using pseudo-elements */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div
                        className="
                              absolute inset-0
                              before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-purple-500
                              before:animate-[gradient_3s_linear_infinite]
                              after:absolute after:inset-[3px] after:bg-gray-800 after:rounded-lg
                        "
                    />
                </div>

                {/* Inner content */}
                <div className="relative z-10 p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
