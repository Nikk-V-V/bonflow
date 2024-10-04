import React from 'react';
import Modal from './Modal';
import useGame from '@/stores/useGame.jsx';

export function ModalManager() {
    const { modalStack, closeModal, openModal } = useGame();

    return (
        <>
            {modalStack.map((modal, index) => (
                <Modal
                    key={index}
                    isOpen={true}
                    onClose={closeModal}
                    title={modal.title}
                    content={modal.content}
                    buttons={modal.buttons.map(button => ({
                        ...button,
                        onClick: () => button.onClick(openModal),
                    }))}
                    showBackdrop={
                        index === modalStack.length - 1 && modal.showBackdrop
                    }
                    logo={modal.logo}
                    checkboxes={modal.checkboxes}
                    multimedia={modal.multimedia}
                    transitionKey={`modal-${index}`}
                />
            ))}
        </>
    );
}
