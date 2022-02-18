 // stage logic 
 import { useState, useEffect } from "react";
 import { createStage } from "../gameHelpers";

 export const useStage = (player, resetPlayer) => {
    //  call useStage hook and generate initial stage aka the clean board
     const [stage, setStage] = useState(createStage());
    // call useEffect hook for side effect
    useEffect(() => {
        const updateStage = prevStage => {
            // First clear the stage
            const newStage = prevStage.map(row => 
                row.map(cell =>(cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );

            // then draw the tetromino
            player.tetromino.forEach((row, y) => {
                // loop through tetromino and look for what cells are occupied to determine shape
                row.forEach((value, x) => {
                    if(value !== 0) {
                        // this will give us coordinates on the stage
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            // if set to merge we will know it has collided and we should keep tertomino in stage
                            `${player.collided ? 'merged' : 'clear'}`,
                        ]
                    }
                });
            });

            return newStage;
        }; 

        
        setStage(prev => updateStage(prev));
    }, [player]); // dependencies for useEffect

     return [stage, setStage];
 }