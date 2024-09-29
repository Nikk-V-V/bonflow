import { useContext } from 'react';
import Cell from './Cell/Cell.jsx';
import { MaterialContext } from '@/hooks/useMaterialsContext.js';

export default function Charity(props) {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    return <Cell material={cellMaterial} geometry={boxGeometry} {...props} />;
}
