import "./GameController.css";
import { Action, ActionForKey } from "../utils/Input";


const GameController = ({
    board,
    gameStats, 
    player,
    setGameOver, 
    setPlayer 
}) => {
    const onKeyUp = ({ code }) => {
        const action = ActionForKey(code);

        if (action === Action.Quit) {
            setGameOver(true);
        }
    };
    
    const onKeyDown = ({ code }) => {
        console.log(`onKeyDown ${code}`)
    
    }

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