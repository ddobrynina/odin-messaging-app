import { useState } from "react";
import { getConversations, Conversation } from "../api/conversations";

import styles from "./Dashboard.module.css"

type DashboardProps = {
    userId: string
}
export default function Dashboard({ userId }: DashboardProps) {
    const [conversations,] = useState(getConversations(userId));
    return <div className={styles.list}>
        {conversations.map(conv =>
            <div key={conv.id} className={styles.conversation}>
                <h2>{conv.users.map(u => u.firstName).join(", ")}</h2>
                {messagePreview(conv, userId)}
            </div>
        )}
    </div>
}

function messagePreview(conv: Conversation, userId: string): React.JSX.Element {
    if (conv.lastMessage == null || conv.lastMessage === undefined)
        return <p><i>No messages</i></p>;

    if (conv.lastMessage?.from === userId)
        return <p><i>You: </i>{conv.lastMessage.content}</p>;

    if (conv.users.length > 1) {
        const from = conv.users.find(u => conv.lastMessage?.from === u.id)?.firstName;
        return <p><i>{from}</i>: {conv.lastMessage.content}</p>
    }

    return <p>{conv.lastMessage.content}</p>
}
