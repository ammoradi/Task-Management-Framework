import TypePolicy from './TypePolicy'
import CardList from './CardList'
class Board {
    private id: Number
    private name: String
    private policy: TypePolicy
    private cardLists: CardList[] = []

    constructor(name: String, policy: TypePolicy) {
        this.id = 0
        this.name = name
        this.policy = policy
    }

    public getId(): Number {
        return this.id
    }

    public getName(): String {
        return this.name
    }
    public setName(name: String): void {
        this.name = name
    }

    public getPolicy(): TypePolicy {
        return this.policy
    }
    public setPolicy(policy: TypePolicy): void {
        this.policy = policy
    }

    public getCardLists(): CardList[] {
        return this.cardLists
    }
    public addCardList(cardList: CardList) {
        this.cardLists.push(cardList)
    }


}

export default Board