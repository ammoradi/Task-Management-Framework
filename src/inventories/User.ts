import UserDbModel from './../db/User'
import User from './../models/User'

class UserInventory {
    private userList: User[] = []

    public getUserList(): any {
        return this.userList
    }

    public addUser(user: User): void {
        this.userList.push(user)
    }

    public deleteUser(userId: Number): void {
        const userIndex = this.userList.findIndex(
            (user: User) => user.getId() === userId
        )
        this.userList.splice(userIndex, 1)
    }
}

export default UserInventory