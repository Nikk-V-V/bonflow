import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import GlassCard from '@/components/global/GlassCard/index.jsx';

export default function Modal({
    isOpen,
    onClose,
    title,
    content,
    buttons,
    showBackdrop = true,
    logo,
    checkboxes,
    multimedia,
    transitionKey,
}) {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {showBackdrop && (
                        <motion.div
                            key={`backdrop-${transitionKey}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={onClose}
                        />
                    )}
                    <motion.div
                        key={`modal-${transitionKey}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <GlassCard className="w-full max-w-md bg-themeBlack  p-5 border-green-900 ">
                                <div className="flex gap-4 items-center mb-4">
                                    {logo && <img src={logo} alt="CashFlow Logo" className="h-8 w-8 rounded-full" />}
                                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                                </div>
                                <div className="prose prose-invert max-w-none mb-6 text-white">
                                    {content}
                                </div>
                                {multimedia && (
                                    <div className="mb-6">
                                        {multimedia.type === 'video' && (
                                            <video src={multimedia.src} controls className="w-full rounded-lg" />
                                        )}
                                        {multimedia.type === 'audio' && (
                                            <audio src={multimedia.src} controls className="w-full" />
                                        )}
                                    </div>
                                )}
                                {checkboxes && (
                                    <div className="space-y-2 mb-6">
                                        {checkboxes.map((checkbox, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`checkbox-${index}`}
                                                    checked={checkbox.checked}
                                                    onCheckedChange={checkbox.onChange}
                                                />
                                                <label
                                                    htmlFor={`checkbox-${index}`}
                                                    className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {checkbox.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-4 justify-end">
                                    {buttons.map((button, index) => (
                                        <Button
                                            key={index}
                                            onClick={button.onClick}
                                            variant={button.variant || 'default'}
                                            className="px-6 py-2 text-white bg-green-700 hover:bg-green-800"
                                        >
                                            {button.label}
                                        </Button>
                                    ))}
                                </div>
                        </GlassCard>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
