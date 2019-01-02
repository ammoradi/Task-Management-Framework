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
}

export default UserInventory