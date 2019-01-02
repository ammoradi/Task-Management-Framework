import Membership from './../models/Membership'

class MembershipInventory {
    private membershipList: Membership[] = []

    public getMembershipList(): any {
        return this.membershipList
    }

    public addMembership(Membership: Membership): void {
        this.membershipList.push(Membership)
    }
}

export default MembershipInventory