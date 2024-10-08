import { useContext } from 'react';
import Cell from './Cell/Cell.jsx';
import { MaterialContext } from '@/hooks/useMaterialsContext.js';

export default function Doodad(props) {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    return <Cell geometry={boxGeometry} material={cellMaterial} {...props} />;
}
