import { useContext } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Searchbar from '../Searchbar'
import { AiFillCaretDown } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'
import AuthModalContext from '../../context/authModalContext'

const Header = () => {

    const { toggleModal, modalOpen } = useContext(AuthModalContext)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Small Margins</a>
                </Link> 
            </div> 
            <Searchbar />
            <div className={styles.userControls}>
                <button className={styles.modalBtn} onClick={toggleModal}>
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
