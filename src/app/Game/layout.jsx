import { Outlet, useNavigation } from 'react-router-dom';
import { Loader } from '@/components/global/Loader';

export default function GameLayout() {
    const navigation = useNavigation();
    return (
        <>
            {navigation.state === 'loading' && <Loader />}
            <Outlet />
        </>
    );
}
