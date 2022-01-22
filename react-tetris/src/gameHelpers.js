// create stage 
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// stage will be nested, multi dimensional array representing rows and columns
export const createStage = () =>
    // represents grid 
    // supply inline function that for each row (20) we create new array and fill it with another array for tetromino cells set to 0 and 'clear'
    Array.from(Array(STAGE_HEIGHT), () =>
        // '0' equals 'nothing' in the grid // clear property will be set to merge when tetrominos collide 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    
    )

