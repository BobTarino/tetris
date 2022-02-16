// player logic 
import { useState } from 'react';

import { randomTetromino } from '../tetrominos';



export const usePlayer = () => {
    const [player, setPlayer] = useState({
    //    create initial state
        pos: { x: 0, y: 0 }, 
        tetromino: randomTetromino().shape,
        collided: false,
    });

    return [player];

}
