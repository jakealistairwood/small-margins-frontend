import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/ShoeIndex.module.scss'

export default function ShoeIndexPage({ shoe }) {

    return (
        <Layout>
            <div className={styles.shoe}>
                <div className={styles.imgContainer}>
                    <img src={shoe.image.formats.small.url} alt={`${shoe.brand} ${shoe.model}`} />
                </div>
                <div className={styles.shoeContent}>
                    <h2>{shoe.brand} {shoe.model}</h2>
                    <p>{shoe.description}</p>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async() => {
    const res = await fetch(`${API_URL}/shoes`)
    const shoes = await res.json()

    const paths = shoes.map((shoe) => ({
        params: { slug: shoe.slug },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({ params: {slug} }) => {
    const res = await fetch(`${API_URL}/shoes?slug=${slug}`)
    const shoes = await res.json()
    
    return {
        props: {
            shoe: shoes[0],
        }, 
        revalidate: 1
    }
}