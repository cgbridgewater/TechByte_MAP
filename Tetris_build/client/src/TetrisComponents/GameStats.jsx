import React from "react"
import "./GameStats.css"
const GameStats = ({ gameStats }) =>{
    const { level, points, linesCompleted, linesPerLevel, totalLines } = gameStats;
    // const  lines = linesCompleted;

    // return(
    //     <div className="GameStats GameStats__right">
    //         <div>
    //             <li className="LiText">Level</li>
    //             <li className="value">{level}</li>
    //         </div>
    //         <div> 
    //             <li className="LiText">Lines</li>
    //             <li className="value">{totalLines}</li>
    //         </div>
    //         <div>
    //             <li className="LiText">Points</li>
    //             <li className="value">{points}</li>
    //         </div>
    //     </div>
    // );
};

export default React.memo(GameStats);