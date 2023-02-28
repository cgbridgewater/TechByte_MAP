import "./Menu.css";


const Menu = ({ onClick }) =>{
    
    return(
        <div className="Menu">
            <button className="Button" onClick={ onClick } >
                Play Ninja Blocks 
            </button>    
            <div className="RulesOfGame">
                <ul>
                    <li className="RulesList"> ⇦ = Move Left</li>
                    <li className="RulesList"> ⇨ = Move Right</li>
                    <li className="RulesList"> ⇩ = Move Down</li>
                    <li className="RulesList"> ⇧ = Rotate</li>
                    <li className="RulesList">Space = Fast Drop</li>
                    <li className="RulesList">P = Pause Game</li>
                    <li className="RulesList">Q = Quit Game</li>
                </ul>
            </div>
        </div>

    );
}

export default Menu;