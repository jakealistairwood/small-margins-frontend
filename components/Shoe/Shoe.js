import styles from './Shoe.module.scss'

const Shoe = ({ shoe }) => {
    return (
        <div className={styles.shoe}>
            <div className={styles.shoeImg}>
                <img src={shoe.img} alt={`${shoe.brand} ${shoe.model}`} />
            </div>
            <div className={styles.shoeDetails}>
                <h3>{shoe.brand} {shoe.model}</h3>
                <p>{shoe.description.slice(0, 150)}...</p>
                <p>£{shoe.price}</p>
            </div>
        </div>
    )
}

export default Shoe
