import styles from '../styles/A.module.css'
import Link from 'next/link'
export default function A({href, title}) {
    return (
        <Link href={href}><div className={styles.link}>{title}</div></Link>
    )
}