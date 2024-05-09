import React from "react"
import styles from "./List.module.css"

type ListProps = {
    items: React.JSX.Element[]
}

export default function List({ items }: ListProps) {
    return <div className={styles.list}>
        {items.map(item => <>{item}</>)}
    </div>
}
