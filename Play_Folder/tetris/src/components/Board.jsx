import "./Board.css"


import Previews from "./Previews";
import BoardCell from "./BoardCell";




const Board = ({board,gameStats, tetrominoes }) => {
    const { level, points, totalLines } = gameStats;
    // const {rows, columns, player, resetPlayer, addLinesCleared} = board;

    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    };

    return (
        // contains the background color
        <div className="BoardPage">
            {/* container for the board , scoring , preview */}
            <div className="BoardContainer">
                {/* Scoring container */}
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
                {/* Tetromino preview container */}
                <div className="PreviewContainer">
                    <p>Piece <br></br>Preview</p>
                    <Previews tetrominoes={tetrominoes} />
                </div>
                {/* Game board */}
                <div className="Board" style={boardStyles}>
                    {board.rows.map((row,y) =>
                        row.map((cell, x) => (
                            <BoardCell key={x * board.size.columns + x} cell={cell} />
                        ))
                    )}
                </div>
            </div>
            <div className="mobile-only">
                <div className="PhoneButton"> 
                    Rotate
                </div>
                <div className="PhoneButton"> 
                    Left
                </div>
                <div className="PhoneButton"> 
                    Down
                </div>
                <div className="PhoneButton"> 
                    Right
                </div>
                <div className="PhoneButton"> 
                    Fast Drop
                </div>
                <div className="PhoneButton"> 
                    Pause
                </div>
                <div className="PhoneButton"> 
                    Quit
                </div>

            </div>
        </div>
    );
};

export default Board;