
//tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_ , row) => {
        return Array(columns).fill(0).map((_ , column) => {
            return{
                row,
                column,
                opened:false,
                flagged:false,
                mined:false,
                exploded:false,
                nearMines:0
            }
        })
    })
};

//espalha as minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;
    while(minesPlanted < minesAmount){
        const rowSelect = parseInt(Math.random() * rows, 10);
        const columnSelect = parseInt(Math.random() * columns, 10);
        if(!board[rowSelect][columnSelect].mined){
            board[rowSelect][columnSelect].mined = true;
            minesPlanted++
        }
    }
};
//tabuleiro com as minas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns );
    spreadMines(board, minesAmount);
    return board;
};

export {createMinedBoard}