import qs from 'qs'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/Shoes.module.scss'
import Shoe from '../../components/Shoe'
import { uuid } from 'uuidv4'

export default function SearchPage({ shoes }) {

    const router = useRouter()

    return (
        <Layout>
            <div className={styles.sectionBanner}>
            <h1>Search Results for {router.query.term}</h1>    
            </div>
            <div className={styles.gridContainer}>
                {shoes.map((shoe) => (
                    <Shoe shoe={shoe} key={uuid()} />
                ))}
            </div>
        </Layout>
    )
}

export const getServerSideProps = async({ query: { term }}) => {
    const query = qs.stringify({
        _where: {
            _or: [
                {brand_contains: term},
                {model_contains: term},
                {description_contains: term},
                {color_contains: term}
            ]
        }
    })

    const res = await fetch(`${API_URL}/shoes?${query}=${term}`)
    const shoes = await res.json()
    return {
        props: { shoes }
    }
}
