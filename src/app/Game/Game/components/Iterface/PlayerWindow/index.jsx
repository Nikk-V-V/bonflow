import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

import WindowTabs from './WindowTabs/index.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/Avatar.jsx';
import { ScrollArea, ScrollBar } from '@components/ui/ScrollArea.jsx';

const tabs = ['Інформація', 'Активи', 'Витрати'];

export default function PlayerWindow({ player, onClose, initialPosition }) {
    const [activeTab, setActiveTab] = useState('Інформація');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [position, setPosition] = useState(initialPosition);
    const [size, setSize] = useState({ width: 300, height: 600 });
    const windowRef = useRef(null);
    const isDragging = useRef(false);
    const isResizing = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const resizeDirection = useRef('');

    const MIN_WIDTH = 300;
    const MAX_WIDTH = 600;
    const MIN_HEIGHT = 370;
    const MAX_HEIGHT = 800;

    useEffect(() => {
        const handleMouseMove = e => {
            if (isDragging.current) {
                requestAnimationFrame(() => {
                    const newX = e.clientX - dragOffset.current.x;
                    const newY = e.clientY - dragOffset.current.y;
                    setPosition({
                        x: Math.max(
                            0,
                            Math.min(newX, window.innerWidth - size.width)
                        ),
                        y: Math.max(
                            0,
                            Math.min(newY, window.innerHeight - size.height)
                        ),
                    });
                });
            } else if (isResizing.current) {
                requestAnimationFrame(() => {
                    let newWidth = size.width;
                    let newHeight = size.height;
                    let newX = position.x;
                    let newY = position.y;

                    if (resizeDirection.current.includes('e')) {
                        newWidth = Math.max(
                            MIN_WIDTH,
                            Math.min(MAX_WIDTH, e.clientX - position.x)
                        );
                    } else if (resizeDirection.current.includes('w')) {
                        const deltaX = position.x - e.clientX;
                        newWidth = Math.max(
                            MIN_WIDTH,
                            Math.min(MAX_WIDTH, size.width + deltaX)
                        );
                        newX = e.clientX;
                    }

                    if (resizeDirection.current.includes('s')) {
                        newHeight = Math.max(
                            MIN_HEIGHT,
                            Math.min(MAX_HEIGHT, e.clientY - position.y)
                        );
                    } else if (resizeDirection.current.includes('n')) {
                        const deltaY = position.y - e.clientY;
                        newHeight = Math.max(
                            MIN_HEIGHT,
                            Math.min(MAX_HEIGHT, size.height + deltaY)
                        );
                        newY = e.clientY;
                    }

                    setSize({ width: newWidth, height: newHeight });
                    setPosition({ x: newX, y: newY });
                });
            }
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            isResizing.current = false;
            document.body.style.cursor = 'default';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [position, size]);

    const handleMouseDown = e => {
        if (e.target.closest('.window-header')) {
            isDragging.current = true;
            dragOffset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            };
        }
    };

    const handleResizeStart = direction => e => {
        e.preventDefault();
        isResizing.current = true;
        resizeDirection.current = direction;
    };

    return (
        <motion.div
            ref={windowRef}
            className="absolute backdrop-blur-4xl bg-opacity-80 bg-themeBlack  rounded-lg shadow-lg overflow-hidden"
            style={{
                width: size.width,
                height: isCollapsed ? 'auto' : size.height,
                left: position.x,
                top: position.y,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
        >
            <div
                className="p-4 window-header cursor-move"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage
                                src={player.model.avatar}
                                alt={player.name}
                            />
                            <AvatarFallback>{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-lg font-bold">{player.name}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="text-gray-400 hover:text-white"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            {isCollapsed ? (
                                <ChevronDown size={20} />
                            ) : (
                                <ChevronUp size={20} />
                            )}
                        </button>
                        <button
                            className="text-gray-400 hover:text-white"
                            onClick={onClose}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {!isCollapsed && (
                <>
                    <div className="px-4">
                        <div className="flex mb-4">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                            : 'bg-themeBlack text-gray-300 hover:bg-gray-600'
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ScrollArea
                        className={`h-[${size.height - 120}px] max-h-[70vh] overflow-auto`}
                    >
                        <div className="p-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <WindowTabs
                                        activeTab={activeTab}
                                        player={player}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </>
            )}
            <div
                className="absolute top-0 left-0 w-1 h-full cursor-w-resize"
                onMouseDown={handleResizeStart('w')}
            />
            <div
                className="absolute top-0 right-0 w-1 h-full cursor-e-resize"
                onMouseDown={handleResizeStart('e')}
            />
            <div
                className="absolute bottom-0 left-0 w-full h-1 cursor-s-resize"
                onMouseDown={handleResizeStart('s')}
            />
            <div
                className="absolute top-0 left-0 w-full h-1 cursor-n-resize"
                onMouseDown={handleResizeStart('n')}
            />
            <div
                className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize"
                onMouseDown={handleResizeStart('nw')}
            />
            <div
                className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize"
                onMouseDown={handleResizeStart('ne')}
            />
            <div
                className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize"
                onMouseDown={handleResizeStart('sw')}
            />
            <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                onMouseDown={handleResizeStart('se')}
            />
        </motion.div>
    );
}
