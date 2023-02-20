import { useState } from "react";
import { useGameOver } from "../hooks/useGameOver";
import Menu from "./Menu";
import Tetris from "./Tetris";


const Game = ({ rows, columns }) => {
    const [ gameOver, SetGameOver, resetGameOver] = useGameOver();
    const start = () => resetGameOver();


return(
    <div className="Game">
        {gameOver ?
            (
                <Menu onClick={start} />
            )
            : 
            (
                <Tetris rows={rows} columns={columns} SetGameOver={SetGameOver} />

            )
        }




    </div>
);
    

} 

export default Game;