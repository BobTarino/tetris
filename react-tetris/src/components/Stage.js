import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => (
    // create cells from stage prop
    <div>
        {/* map over stage prop */}
        {stage.map(row => row.map((cell, x) => <Cell key = {x} type = {cell[0]} />))}
    </div>
);

export default Stage; 