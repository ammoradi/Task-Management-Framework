import Board from './../models/Board'

class BoardInventory {
    private boardList: Board[] = []

    public getBoardList(): any {
        return this.boardList
    }

    public addBoard(board: Board): void {
        this.boardList.push(board)
    }

    public deleteBoard(boardId: Number): void {
        const boardIndex = this.boardList.findIndex(
            (board: Board) => board.getId() === boardId
        )
        this.boardList.splice(boardIndex, 1)
    }
}

export default BoardInventory