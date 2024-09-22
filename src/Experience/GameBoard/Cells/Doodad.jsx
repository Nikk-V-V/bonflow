import { useContext } from 'react';

import { MaterialContext } from '../../../hooks/useMaterialsContext.js';
import Cell from './Cell/Cell.jsx';

export default function Doodad(props) {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    return <Cell geometry={boxGeometry} material={cellMaterial} {...props} />;
}
