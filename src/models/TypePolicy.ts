interface TypePolicy {
    canAddCardList(mode: String): boolean,
    canAddCardMember(role: String): boolean,
    canModifyBoard(role: String): boolean,
}

class PublicPolicy implements TypePolicy {
    canAddCardList(): boolean {
        return true
    }
    canAddCardMember(): boolean {
        return true
    }
    canModifyBoard(): boolean {
        return true
    }
}

export { PublicPolicy }
export default TypePolicy