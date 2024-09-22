import React from 'react';
import General from './General.jsx';
import Assets from './Assets.jsx';
import Expenses from './Expenses.jsx';

export default function WindowTabs({ activeTab, player }) {
    switch (activeTab) {
        case 'Інформація':
            return <General player={player} />;
        case 'Assets':
            return <Assets player={player} />;
        case 'Expenses':
            return <Expenses player={player} />;
        default:
            return <></>;
    }
}
