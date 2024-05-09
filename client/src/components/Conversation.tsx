import React from 'react'

import styles from "./Conversation.module.css"
import { Conversation as ConvType } from '../api/conversations'

type ConversationProps = {
    conv: ConvType
    userId: string
}

export default function Conversation({ conv, userId }: ConversationProps) {
    return <div key={conv.id} className={styles.conversation}>
        <h2>{conv.users.map(u => u.firstName).join(", ")}</h2>
        {messagePreview(conv, userId)}
    </div>
}

function messagePreview(conv: ConvType, userId: string): React.JSX.Element {
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
