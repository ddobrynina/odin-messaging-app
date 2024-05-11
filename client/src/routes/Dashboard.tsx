import { useState } from "react";

import { getConversations } from "../api/conversations";
import Conversation from "../components/Conversation";
import List from "../components/List";
import Header from "../components/Header";

type DashboardProps = {
    userId: string
}

export default function Dashboard({ userId }: DashboardProps) {
    const [conversations,] = useState(getConversations(userId));
    return <div style={{ position: "relative" }}>
        <Header />
        <List items={conversations.map(conv => (
            <Conversation conv={conv} userId={userId} />
            ))} />
    </div>
}
