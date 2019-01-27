import User from './User'
import Board from './Board'

enum Role { OWNER = 'owner', ADMIN = 'admin', MEMBER = 'member' }

class Membership {
    private id: Number
    private user: User
    private board: Board
    private role: Role

    constructor(user: User, board: Board, role: Role) {
        this.id = 0
        this.user = user
        this.board = board
        this.role = role
    }

    public getId(): Number {
        return this.id
    }

    public getUser(): User {
        return this.user
    }
    public setUser(user: User): void {
        this.user = user
    }

    public getBoard(): Board {
        return this.board
    }
    public setBoard(board: Board): void {
        this.board = board
    }

    public getRole(): Role {
        return this.role
    }
    public setRole(role: Role): void {
        this.role = role
    }
}

export { Role }
export default Membership