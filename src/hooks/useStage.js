// state logic
import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {

        const updateStage = prevStage => {
            //flush the stage
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            )

            // draw the tetrimino
            player.tetromino.forEach((row, y) => {
                // loop through tetromino and look for what cells are occupied to determine shape
                row.forEach((value, x) => {
                    // this will give us coordinates on the stage
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            // if set to merge we will know it has collided and we should keep tertomino in stage
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                });
            });
            //check if we collided
            if (player.collided) {
                resetPlayer();
            }

            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer]);

    return [stage, setStage];

}