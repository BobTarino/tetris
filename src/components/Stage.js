import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
    // create cells from stage prop 
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* map over stage prop */}
        {/* for each cell we will render out cell component */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
);

export default Stage; 