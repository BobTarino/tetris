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


// check collision detetction and if we're outside stage   
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    // loop through tertrominos
    for (let y = 0; y < player.tetromino.length; y += 1) {
        // nested loop
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // 1. check that we're on an actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                // 2. check that our move in inside the game area's height (y)
                // we shouldn't go through the bottom of the play area
                !stage[y + player.pos.y + moveY] ||
                    // 3.check that our move in inside the game area's width (x) 
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. check that cell we're moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 
                    'clear'

                ) {
                    return true;
                }
            }
                 
        }   
    }
        
};


