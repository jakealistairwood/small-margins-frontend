import styles from './Footer.module.scss'
import Link from 'next/link'
import { uuid } from 'uuidv4'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

    const siteLinks = [
        {
            id: uuid(),
            name: 'Home',
            href: '/'
        },
        {
            id: uuid(),
            name: 'About',
            href: '/about'
        },
        {
            id: uuid(),
            name: 'Shoes',
            href: '/shoes'
        },
        {
            id: uuid(),
            name: 'Clothes',
            href: '/clothes'
        },
        {
            id: uuid(),
            name: 'Articles',
            href: '/articles'
        },
        {
            id: uuid(),
            name: 'Contact',
            href: '/contact'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>Small Margins</a>
                    </Link> 
                </div>
                <ul className={styles.links}>
                    {siteLinks.map((link) => (
                        <Link key={link.id} href={link.href}>
                            <a><li>{link.name}</li></a>
                        </Link>
                    ))}
                </ul>
                <div className={styles.socialIcons}>
                    <div className={styles.iconContainer}>
                        <FaFacebookF />
                    </div>
                    <div className={styles.iconContainer}>
                        <FaInstagram />
                    </div>
                    <div className={styles.iconContainer}>
                        <FaTwitter />
                    </div>
                    <div className={styles.iconContainer}>
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
