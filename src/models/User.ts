import UserDbModel from './../db/User'
import Membership from './Membership'

class User {
  private id: Number
  private username: String
  private password: String
  private email: String
  private userMemberships: Membership[]
  constructor(username: String, password: String, email: String) {
    this.id = 0
    this.username = username
    this.password = password
    this.email = email
  }

  public getId(): Number {
    return this.id
  }

  public getUserName(): String {
    return this.username
  }
  public setUserName(username: String): void {
    this.username = username
  }

  public getPassword(): String {
    return this.password
  }
  public setPassword(password: String): void {
    this.password = password
  }

  public getEmail(): String {
    return this.email
  }
  public setEmail(email: String): void {
    this.email = email
  }

}

export default User