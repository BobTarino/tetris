// state logic
import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0); // keep track of all the rows cleared

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = newStage =>
            newStage.reduce((ack, row) => {
                // check if row doesn't contain zeroes
                if (row.findIndex(cell => cell[0] === 0) === -1) { // clear row if -1 is returned 
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0,'clear'])); // accumulator uses unshift to add new rows to array when rows are cleared, creating illusion
                    return ack;
                } 
                ack.push(row); // if we dont have full row, just return row as it is in array
                return ack;

            }, [])


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
                return sweepRows(newStage);
            }

            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer]);

    return [stage, setStage, rowsCleared];

}