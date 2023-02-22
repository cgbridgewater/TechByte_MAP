import "./Board.css"


import BoardCell from "./BoardCell";

const Board = ({board,gameStats, tetrominoes}) => {
    const { level, points, totalLines } = gameStats;

    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    };

    return (
        <div className="BoardPage">
            <div className="BoardContainer">
                <div className="Scoring">
                    <div>
                        <p className="ScoringText">Level:</p>
                        <p>{level}</p>
                    </div>
                    <div>
                        <p className="ScoringText">Lines:</p>
                        <p>{totalLines}</p>
                    </div>
                    <div>
                        <p className="ScoringText">Score:</p>
                        <p>{ points}</p>
                    </div>
                </div>
                <div> 
                    PREVIEW DISPLAY HERE!!






                    
                </div>


                <div className="Board" style={boardStyles}>
                    {board.rows.map((row,y) =>
                        row.map((cell, x) => (
                            <BoardCell key={x * board.size.columns + x} cell={cell} />
                        ))
                    )}
                </div>

            </div>

        </div>
    );

};

export default Board;