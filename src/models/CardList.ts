import Card from './Card'

class CardList {
    private id: Number
    private name: String
    private boardId: Number
    private cards: Card[] = []

    constructor(boardId: Number, name: String) {
        this.boardId = boardId
        this.name = name
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

    public getBoardId(): Number {
        return this.boardId
    }

    public getCards(): Card[] {
        return this.cards
    }
    public addCard(card: Card): void {
        this.cards.push(card)
    }
}

export default CardList