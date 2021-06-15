import Link from 'next/link'
import styles from './Header.module.scss'
import Searchbar from '../Searchbar'
import { AiFillCaretDown } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Small Margins</a>
                </Link> 
            </div> 
            <Searchbar />
            <div className={styles.userControls}>
                <button className={styles.modalBtn}>
                    <span>Login</span>
                    <AiFillCaretDown />
                </button>
                <FaHeart className={styles.favouritesIcon}/>
                <GiShoppingCart className={styles.cartIcon} />
            </div>
        </header>
    )
}

export default Header
