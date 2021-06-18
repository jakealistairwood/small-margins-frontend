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
                    <div className={styles.cardFooter}>
                        <p className={styles.price}>£{shoe.price}</p>
                        <div className={styles.ctaMessage}>
                            {shoe.qty <=5 ? (
                                <p className={styles.warningMessage}>Hurry! Selling Out Quickly</p>
                            ) : (
                                <p className={styles.stockMessage}>In Stock</p>
                            )}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Shoe
