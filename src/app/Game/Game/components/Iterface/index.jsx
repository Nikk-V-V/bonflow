import Hud from './HUD/';
import TopPanel from './TopPanel/index.jsx';

export default function Interface({ children }) {
    return (
        <>
            <TopPanel />
            <main className="h-screen">{children}</main>
            <Hud />
        </>
    );
}
