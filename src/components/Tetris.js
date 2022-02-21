// main component
import React, { useState} from 'react';

// clean stage when game is restarted  
import { createStage, checkCollision } from '../gameHelpers';

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
    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    // grab and destructure stage
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = dir => {
        // check collision when moving player and when player drops
        if(!checkCollision(player, stage, {x: dir, y: 0})) {
        updatePlayerPos({ x: dir, y: 0 });
        }
    }

    const startGame = () => {
        // reset everything
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false }) // increase y value by 1 making player tetromino go down

    }
    
    const dropPlayer = () => {
        drop();

    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if(keyCode === 37) {
                movePlayer(-1); // move player to left
            } else if (keyCode === 39) {
                movePlayer(1); // move player to right
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
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
                <StartButton callback = {startGame} />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;

