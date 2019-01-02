import Board from './../models/Board'

class BoardInventory {
    private boardList: Board[] = []

    public getBoardList(): any {
        return this.boardList
    }

    public addBoard(board: Board): void {
        this.boardList.push(board)
    }
}

export default BoardInventory