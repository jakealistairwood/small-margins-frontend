import styles from './Searchbar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <AiOutlineSearch />
            <label className={styles.searchLabel} htmlFor='searchbar'>Search</label>
            <input 
                className={styles.searchInput}
                type="text" 
                id="searchbar" 
                name="searchbar" 
            />
        </div>
    )
}

export default Searchbar
