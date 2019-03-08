
// Função que cria o Tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_,column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

// Função que espalha as Minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns )
    spreadMines(board, minesAmount)
    return board
}
// Função que gera um Clone do tabuleiro -
// smp que mexer no estado nao mexe na referencia do objeto e sim nas evolucoes do tabuleiro
const cloneBoard = board =>{
    return board.map(rows => {
        return rows.map(field => {
            //todos os objetos clonados
            return{...field}
        })
    })
}

// Função descobri a vizinhança do campo aberto
const getNeighbors = (board, row, column) => {
    const neighbors = []
    //possiveis linha baseado na linha que recebeu
    const rows = [ row -1, row , row +1]
    const columns = [ column -1, column, column +1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column // Valida se coluna e linha são diferentes
            const validRow = r >= 0 && r < board.length // Verifica e Valida uma Linha Valida
            const validColumn = c >= 0 && c < board[0].length // Verifica e Valida uma Coluna Valida
            if(different && validRow && validColumn){
                // adiciona os vizinhos válidos
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

//Saber se a vizinhança é segura
const safeNeighborhood = (board, row, column) =>{
    //Função que percorre o vizinho atual, verifica se o vizinho esta minado = true,
    // se um vizinho estiver mina a função vai retornar false e então a vizinhança n é segura.
    const safes = (result, neighbor) => result && !neighbor.mined
    //inicia com true , o resultado dessa função vai dizer se a vizinhança é segura
    return getNeighbors(board, row, column).reduce(safes, true)
}

// Função responsável por abrir o campo ao clicar
const openField = (board, row, column) =>{
    const field = board[row][column]
    if(!field.opened){
        field.opened = true
        if(field.mined){
            field.exploded = true
        }else if(safeNeighborhood(board,row,column)){
            // se a vizinhança for segura, abre de forma recursiva outros campos ao redor
            getNeighbors(board,row,column)
                .forEach(n => openField(board, n.row, n.column))
        }else{
            // se a vizinhando nao for segura precisa calcular quantas minas tem ao redor
            const neighbors = getNeighbors(board,row,column)
            // filtro nos vizinhos que estão minados
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

/**Percorrer todos os campos do tabuleiro
 vai juntar todos os arrays em um unico array com todos campos */
const fields = board => [].concat(...board)

/** saber se um campo foi explodido
 pega todos os campos do tabuleiro,
 e um filtro com todos os campos que tem o atributo exploded true*/
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0

//campo pendente é perigoso e nao marcou com a flag
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)
//ganhou o jogo, se nao tiver campos pendentes o usuario ganhou o jogo
const wonGame = board => fields(board).filter(pendding).length === 0
// mostrar as mina que existem no jogo, dps que o user perder
const showMines = board => fields(board).filter(field => field.mined)
//abrir todos os campos
    .forEach(field => field.opened = true)

//marcar bandeira
const invertFlag = (board, row, column) =>{
    const field = board[row][column]
    field.flagged = !field.flagged
}
//flags usadas
const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length
export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed

}