export type Conversation = {
    id: string,
    users: User[],
    lastMessage?: Message,
}

const sampleUsers = [
    {
        id: "1",
        firstName: "Mike",
        lastName: "Jacobs",
    },
    {
        id: "2",
        firstName: "Dasha",
        lastName: "Dobrynina",
    },
    {
        id: "3",
        firstName: "Richard",
        lastName: "Simpson",
    },
];
const sampleConvos = [
    {
        id: "test1",
        users: sampleUsers.slice(0, 2),
        lastMessage: {
            idx: 0n,
            from: sampleUsers[0].id,
            content: "Hey Dasha, check it out"
        }
    },
    {
        id: "test2",
        users: sampleUsers,
        lastMessage: {
            idx: 2n,
            from: sampleUsers[2].id,
            content: "Looks cool guys! Can't wait to see how this turns out in the future!!!"
        }
    },
];

export function getConversations(userId: string): Conversation[] {
    const convos = sampleConvos
        .filter(
            convo => convo.users.map(user => user.id).includes(userId)
        ).map(convo => {
            const otherUsers = convo.users.filter(
                user => user.id !== userId
            );

            return { ...convo, users: otherUsers };
        });

    return convos;
}