import "./GameController.css";
import { Action, ActionForKey } from "../utils/Input";
import { playerController } from "../utils/PlayerController";

import { useDropTime } from "../hooks/useDropTime";
import { useInterval } from "../hooks/useInterval";

const GameController = ({
    board,
    gameStats, 
    player,
    setGameOver, 
    setPlayer 
}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ // drop time controller
        gameStats
    })

    useInterval(() => { // set slow drop action to 1000ms standard drop rate
        handleInput({ action: Action.SlowDrop });
    }, dropTime);


    const onKeyUp = ({ code }) => { //bring in key commands to control tetrominoes
        const action = ActionForKey(code);

        if (action === Action.Quit) {  // quit game action
            setGameOver(true);
        }
    };
    
    const onKeyDown = ({ code }) => {
        const action = ActionForKey(code);
        handleInput ({ action });
    };

    const handleInput = ({ action }) => {  // controls player
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    };

    return(
        <input 
            className="GameController" 
            type="text" 
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />

    );
}


export default GameController