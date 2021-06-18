import styles from './Searchbar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <AiOutlineSearch className={styles.SearchIcon} />
            <label className={styles.searchLabel} htmlFor='searchbar'>Search</label>
            <input 
                className={styles.searchInput}
                type="text" 
                id="searchbar" 
                name="searchbar" 
                placeholder="Search by brand, model, colour etc "
            />
        </div>
    )
}

export default Searchbar
