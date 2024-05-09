import styles from "./Header.module.css"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
                msgme
            </h1>
            <div className={styles.box}>
                <Link to="/dashboard/add-friend">
                    <div className={styles.link}>
                        <div className={styles.horizontal} />
                        <div className={styles.vertical} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
