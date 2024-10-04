import Hud from './HUD/';
import TopPanel from './TopPanel/index.jsx';
import { ModalManager } from './ModalManager';

export default function Interface({ children }) {
    return (
        <>
            <TopPanel />
            <main className="h-screen">{children}</main>
            <Hud />
            <ModalManager />
        </>
    );
}
