import Link from 'next/link'
import styles from './Subheader.module.scss'

const Subheader = () => {

    const links = [
        {
            href: '/',
            name: 'Home'
        },
        {
            href: '#',
            name: 'About'
        },
        {
            href: '#',
            name: 'Shoes'
        },
        {
            href: '#',
            name: 'Articles'
        },
        {
            href:'#',
            name: 'Contact'
        }
    ]

    return (
        <nav className={styles.subheader}>
            <ul>
                {links.map((link) => (
                    <Link href={link.href}>
                        <a><li>{link.name}</li></a>
                    </Link>
                ))}
            </ul>    
        </nav>
    )
}

export default Subheader
