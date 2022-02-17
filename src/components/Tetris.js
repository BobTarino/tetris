// main component
import React, { useState} from 'react';

// clean stage when game is restarted  
import { createStage } from '../gameHelpers';

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
    // grab and destructure stage
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = dir => {

    }

    const startGame = () => {

    }

    const drop = () => {

    }
    
    const dropPlayer = () => {

    }

    const move = ({ keyCode }) => {

    }

    return (
        <StyledTetrisWrapper role = "button" tabIndex = "0" onKeyDown = {e => move(e)} >
            <StyledTetris>
            <Stage stage = {stage} />
            <aside>
                {gameOver ? (
                    // ternary operator determining if game is over
                    <Display gameOver = {gameOver} text ="Game Over" />  
                ) : (
                <div>
                    <Display text = "Score" />
                    <Display text = "Rows" />
                    <Display text = "Level1" />
                </div> 
                )}
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;

