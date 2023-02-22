import "./Preview.css";
import React from "react";
import { buildBoard } from "../utils/Board";
import { transferToBoard } from "../utils/Tetrominoes";

import BoardCell from "./BoardCell";

const Preview = ({ tetromino, index }) => {
    const { shape, className } = tetromino;

    const board = buildBoard({ rows: 4, columns: 4});

    const style = { left: `${index * 8}vw` };  // was top:   *12

    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, column: 0 },
        rows: board.rows,
        shape
    });
    
    return (
        <div className="Preview" style={style}>
            {/* <div className="PreviewContainer"> */}
                <div className="Preview-board">
                    {board.rows.map((row, y) =>
                    row.map((cell, x) => (
                        <BoardCell key={x * board.size.columns + x} cell={cell} />
                    ))
                    )}
                </div>
            {/* </div> */}
        </div>
    );
};
    
export default React.memo(Preview);