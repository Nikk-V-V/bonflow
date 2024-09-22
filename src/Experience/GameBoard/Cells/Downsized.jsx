import { useContext } from 'react';

import { MaterialContext } from '../../../hooks/useMaterialsContext.js';
import Cell from './Cell/Cell.jsx';

export default function Downsized(props) {
    const { boxGeometry, cellMaterial } = useContext(MaterialContext);

    return <Cell material={cellMaterial} geometry={boxGeometry} {...props} />;
}
