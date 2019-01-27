class Comment {
    private id: Number
    private body: String
    private boardId: Number
    private userId: Number
    constructor(boardId: Number, userId: Number, body: String) {
        this.boardId = boardId
        this.userId = userId
        this.body = body
    }

    public getId(): Number {
        return this.id
    }

    public getUserId(): Number {
        return this.userId
    }

    public getBoardId(): Number {
        return this.boardId
    }

    public getBody (): String {
        return this.body
    }

}

export default Comment