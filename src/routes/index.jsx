import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loader } from '@components/global/Loader';

const GameLayout = lazy(() => import('../app/Game/layout.jsx'));
const Game = lazy(() => import('../app/Game/Game/page.jsx'));

export default createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loader />}>
                <GameLayout />
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Game />
                    </Suspense>
                ),
            },
        ],
    },
]);
