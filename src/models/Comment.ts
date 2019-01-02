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

    public getMembershipId(): Number {
        return this.boardId
    }

    public getBody (): String {
        return this.body
    }

}

export default Comment