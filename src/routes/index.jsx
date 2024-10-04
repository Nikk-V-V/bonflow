import { createBrowserRouter } from 'react-router-dom';
import Game from '@/app/Game/page.jsx';
import GameLayout from '@/app/Game/layout.jsx';

export default createBrowserRouter([
    {
        path: '/',
        element: (
            // <Suspense fallback={<Loader />}>
            <GameLayout />
            // </Suspense>
        ),
        children: [
            {
                path: '/',
                element: (
                    // <Suspense fallback={<Loader />}>
                    <Game />
                    // </Suspense>
                ),
            },
        ],
    },
]);
