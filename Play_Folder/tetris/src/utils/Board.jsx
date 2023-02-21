import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";


export const buildBoard = ({ rows, columns }) => {
    const builtRows = Array.from({ length: rows }, () =>
    Array.from({length: columns }, () => ({ ...defaultCell }))
    );

    return {
        rows: builtRows,
        size: { rows, columns }
    };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesToBoard}) => {
    const { tetromino, position } = player;

    // copy and clear spaces used by pieces that
    // hadn't collided and occupied spaces perminently
    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : { ...defaultCell}))
    );

    rows = transferToBoard({  // pull piece from preview and move onto the board
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    });

    //if we collided, reset the player to top with new piece
    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }

    // return the next board
    return{
        rows,
        size: { ...board.size }
    };
};


export const hasCollision = ({ board, position, shape }) => {  // collision detection
    for (let y = 0; y < shape.length; y++) { // go through shape rows
        const row = y + position.row;

        for(let x = 0; x < shape[y].length; x++) {  // go through shape columns
            if (shape[y][x]) {
                const column = x + position.column;  

                if(
                    board.rows[row] &&     // if we have a row, column or both occupied give true
                    board.rows[row][column] &&
                    board.rows[row][column].occupied
                ) {
                    return true;  // if true there is a collision
                }
            }
        }
    }

    return false;  // if false there is no collision
}










export const isWithinBoard =  ({ board, position, shape }) => { //check inside board limits
    for (let y = 0; y < shape.length; y++) {  // go through shape rows
        const row = y + position.row;

        for (let x = 0; x < shape[y].length; x++) {// go through columns
            if (shape[y][x]) {                     // check if there is a tetromino at that position
                const column = x + position.column;  // add piece into column
                const isValidPosition = board.rows[row] && board.rows[row][column]; //check if empty or valid

                if (!isValidPosition) return false; // reject if occupied
            }
        }
    }
    return true; // all positions are valid within board
};