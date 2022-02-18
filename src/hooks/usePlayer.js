// player logic 
import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';



export const usePlayer = () => {
    const [player, setPlayer] = useState({
    //    create initial state
        pos: { x: 0, y: 0 }, 
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({ x, y, collided}) => {
        setPlayer(prev => ({  // set player state
            ...prev,  // spread previous state
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},  // set position to new value and add to state
            collided,
        }))
    }

    // useCallback hook will keep game loop from entering infinty loop
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },  // reset positon approx in top middle
            tetromino: randomTetromino().shape,
            collided: false, 
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];

}
