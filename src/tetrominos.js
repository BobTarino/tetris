export const TETROMINOS = {
    //properties and tetro shapes
    0: { shape: [[0]], color: '0,0,0'}, //nothing on stage
    I: { // based on 4 x 4 grid of arrays
        shape: [                
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0]
                ],
        color: '80, 227, 230', //rgb values for color 
    },
    J: { // based on 3 x 3 grid 
        shape: [           
                 [0, 'J', 0],
                 [0, 'J', 0],
                 ['J', 'J', 0]
                ],
        color: '36, 95, 223', //rgb values for color

    },
    L: { // based on 3 x 3 grid 
        shape: [           
                 [0, 'L', 0],
                 [0, 'L', 0],
                 [0, 'L', 'L']
                ],
        color: '223, 173, 36', //rgb values for color
    },
    O: { // based on 2 x 2 grid 
        shape: [           
                 ['O', 'O'],
                 ['O', 'O']
                ],
        color: '223, 217, 36', //rgb values for color
    },
    S: { // based on 3 x 3 grid 
        shape: [           
                 [0, 'S', 'S'],
                 ['S', 'S', 0],
                 [0, 0, 0]
                ],
        color: '48, 211, 56', //rgb values for color
    },
    T: { // based on 3 x 3 grid 
        shape: [           
                 [0, 0, 0],
                 ['T', 'T', 'T'],
                 [0, 'T', 0]
                ],
        color: '132, 61, 198', //rgb values for color
    },
    Z: { // based on 3 x 3 grid 
        shape: [           
                 ['Z', 'Z', 0],
                 [0, 'Z', 'Z'],
                 [0, 0, 0]
                ],
        color: '227, 78, 78', //rgb values for color
    },
}

// function generates random tetrominos
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';  // string of all 7 tetrominos
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino]

}