import Link from 'next/link'
import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/Shoes.module.scss'
import Shoe from '../../components/Shoe'

export default function ShoesPage({ shoes }) {
    return (
        <Layout>
            <div className={styles.sectionBanner}>
                <h1>All our running shoes</h1>    
            </div>
            <div className={styles.gridContainer}>
                {shoes.map((shoe) => (
                    <Shoe shoe={shoe} />
                ))}
            </div>
        </Layout>
    )
}

export const getStaticProps = async() => {
    const res = await fetch(`${API_URL}/api/shoes`)
    const shoes = await res.json()
    return {
        props: { shoes }
    }
}
