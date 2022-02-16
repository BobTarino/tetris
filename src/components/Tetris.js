// main component
import React, { useState} from 'react';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    // speed to modify
    const [dropTime, setDropTime] = useState(null);
    // boolean whether game is over - starts false because game is starting
    const [gameOver, setGameOver] = useState(false);
    // grab new player from usePlayer hook
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);



    console.log('re-render');
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage = {createStage()} />
            <aside>
                <div>
                    <Display text = "Score" />
                    <Display text = "Rows" />
                    <Display text = "Level1" />
                </div> 
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;

