import Link from 'next/link'
import styles from './Header.module.scss'
import Searchbar from '../Searchbar'

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
                
            </div>
        </header>
    )
}

export default Header
