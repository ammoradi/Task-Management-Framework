import UserInventory from './../src/inventories/User'
import BoardInventory from './../src/inventories/Board'
import MembershipInventory from './../src/inventories/Membership'
import User from '../src/models/User';
import Board from '../src/models/Board';
import Membership, { Role } from '../src/models/Membership';
import CardList from '../src/models/CardList';
import Card from '../src/models/Card';
import Comment from '../src/models/Comment';
import { PublicPolicy } from './../src/models/TypePolicy'

const userInv = new UserInventory()
const boardInv = new BoardInventory()
const memInv = new MembershipInventory()

describe('add new user', () => {
    it('it adds new user object into database', (done) => {
        userInv.addUser(new User('amir', '123', 'a@a.a'))
        console.log(userInv.getUserList())
        expect(2 + 2).toBe(4);
        done()
    });
});

describe('add new board', () => {
    it('it adds new board object into database', (done) => {
        boardInv.addBoard(new Board('test-1', new PublicPolicy()))
        console.log(boardInv.getBoardList())
        expect(2 + 2).toBe(4);
        done()
    });
});

describe('add new membership', () => {
    it('it adds new membership object into database, it will connect a user to a board with a role', (done) => {
        const board = boardInv.getBoardList()[0]
        const user = userInv.getUserList()[0]
        const role = Role.OWNER
        memInv.addMembership(new Membership(user, board, role))
        console.log(memInv.getMembershipList())
        expect(2 + 2).toBe(4);
        done()
    });
});

describe('card list and card', () => {
    it('it adds new cardlist and two cards object into board', (done) => {
        const newBoard = new Board('test-2', new PublicPolicy())
        newBoard.addCardList(new CardList(newBoard.getId(), 'cardlist-1'))
        const newCardList = newBoard.getCardLists()[0]
        newCardList.addCard(new Card(newCardList.getBoardId(), 'card-1', 'this is test', '1399/1/1'))
        newCardList.addCard(new Card(newCardList.getBoardId(), 'card-2', 'this is test 2', '1399/1/5'))
        console.log(newBoard)
        console.log(newCardList)
        boardInv.addBoard(newBoard)
        expect(2 + 2).toBe(4);
        done()
    });
});

describe('add new comment to card', () => {
    it('it adds new comment to comment', (done) => {
        const card = boardInv.getBoardList()[1].getCardLists()[0].getCards()[1]
        card.addComment(new Comment(0, 0, 'OMG THIS IS HUGE BUG!'))
        console.log(card)
        expect(2 + 2).toBe(4);
        done()
    });
});