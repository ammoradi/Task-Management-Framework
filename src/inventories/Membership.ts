import Membership from './../models/Membership'

class MembershipInventory {
    private membershipList: Membership[] = []

    public getMembershipList(): any {
        return this.membershipList
    }

    public addMembership(Membership: Membership): void {
        this.membershipList.push(Membership)
    }

    public deleteMembership(membershipId: Number): void {
        const membershipIndex = this.membershipList.findIndex(
            (membership: Membership) => membership.getId() === membershipId
        )
        this.membershipList.splice(membershipIndex, 1)
    }
}

export default MembershipInventory