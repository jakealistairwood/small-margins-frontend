import Link from 'next/link'
import styles from './Subheader.module.scss'

const Subheader = () => {

    const links = [
        {
            id: 1,
            href: '/',
            name: 'Home'
        },
        {
            id: 2,
            href: '#',
            name: 'About'
        },
        {
            id: 3,
            href: '/shoes',
            name: 'Shoes'
        },
        {
            id: 4,
            href: '#',
            name: 'Articles'
        },
        {
            id: 5,
            href:'#',
            name: 'Contact'
        }
    ]

    return (
        <nav className={styles.subheader}>
            <ul>
                {links.map((link) => (
                    <Link key={link.id} href={link.href}>
                        <a><li>{link.name}</li></a>
                    </Link>
                ))}
            </ul>    
        </nav>
    )
}

export default Subheader
