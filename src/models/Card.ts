import Attachment from './Attachment'
import Comment from './Comment'

class Card {
    private id: Number
    private name: String
    private boardId: Number
    private description: String
    private dueDate: String
    private comments: Comment[] = []
    private attachments: Attachment[] = []

    constructor (boardId: Number, name: String, description: String, dueDate: String) {
        this.boardId = boardId
        this.name = name
        this.description = description
        this.dueDate = dueDate
    }

    public getId(): Number {
        return this.id
    }

    public getName(): String {
        return this.name
    }
    public setName(name: String) {
        this.name = name
    }

    public getDescription(): String {
        return this.description
    }
    public setDescription(description: String) {
        this.description = description
    }

    public getBoardId(): Number {
        return this.boardId
    }

    public getComments(): Comment[] {
        return this.comments
    }
    public addComment(comment: Comment): void {
        this.comments.push(comment)
    }

    public getAttachments(): Attachment[] {
        return this.attachments
    }
    public addAttachment(attachment: Attachment): void {
        this.attachments.push(attachment)
    }

    public getDueDate(): String {
        return this.dueDate
    }

    public setDueDate(dueDate: String): void {
        this.dueDate = dueDate
    }
}

export default Card