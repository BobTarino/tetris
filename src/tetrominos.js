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
    


}