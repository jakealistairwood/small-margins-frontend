import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/ShoeIndex.module.scss'
import ReactMarkdown from 'react-markdown'


export default function ShoeIndexPage({ shoe }) {

    return (
        <Layout>
            <div className={styles.shoe}>
                <div className={styles.imgContainer}>
                    <img src={shoe.image.formats.small.url} alt={`${shoe.brand} ${shoe.model}`} />
                </div>
                <div className={styles.shoeContent}>
                    <div className={styles.contentHeader}>
                        <h1>{shoe.brand} {shoe.model}</h1>
                        <p>{shoe.color}</p>
                    </div>
                    <ReactMarkdown>{shoe.description}</ReactMarkdown>
                    <div className={styles.contentFooter}>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async({ query: { slug }}) => {

    const res = await fetch(`${API_URL}/shoes?slug=${slug}`)
    const shoes = await res.json()

    return {
        props: {
            shoe: shoes[0]
        }
    }
}