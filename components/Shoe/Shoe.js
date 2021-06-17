import styles from './Shoe.module.scss'
import Link from 'next/link'

const Shoe = ({ shoe }) => {
    return (
        <Link href={`/shoes/${shoe.slug}`}>
            <a className={styles.shoe}>
                <div className={styles.shoeImg}>
                    <img src={shoe.image.formats.thumbnail.url} alt={`${shoe.brand} ${shoe.model}`} />
                </div>
                <div className={styles.shoeDetails}>
                    <h3>{shoe.brand} {shoe.model}</h3>
                    <p>{shoe.description.slice(0, 150)}...</p>
                    <p>£{shoe.price}</p>
                </div>
            </a>
        </Link>
    )
}

export default Shoe
