import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Searchbar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {

    const [ searchTerm, setSearchTerm ] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/shoes/search?term=${searchTerm}`)
        setSearchTerm('')
    }

    return (
        <form className={styles.searchbar} onSubmit={handleSubmit}>
            <AiOutlineSearch className={styles.SearchIcon} />
            <label className={styles.searchLabel} htmlFor='searchbar'>Search</label>
            <input 
                className={styles.searchInput}
                type="text" 
                id="searchbar" 
                name="searchbar" 
                placeholder="Search by brand, model, colour etc "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    )
}

export default Searchbar
