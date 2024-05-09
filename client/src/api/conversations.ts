export type Conversation = {
    id: string,
    users: User[],
    lastMessage?: Message,
}
