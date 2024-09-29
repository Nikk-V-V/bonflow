import React from 'react';

const BonflowModal = ({ isOpen, onClose, cardInfo }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Card Information</h2>
                <p><strong>Name:</strong> {cardInfo.name}</p>
                <p><strong>Description:</strong> {cardInfo.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default BonflowModal;
