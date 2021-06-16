import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import axios from 'axios'
import { API_URL } from '../config/index'
import Shoe from '../components/Shoe'

export default function Home({ shoes }) {

  return (
    <Layout>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* <h1>Supercharge Your Efforts</h1> */}
        </div>
      </div>
      <section className={styles.trending}>
        <div className={styles.sectionHeader}>
          <h2>Trending Now</h2>
          <div className={styles.designDetail}></div>
        </div>
        <div className={styles.gridContainer}>
          {shoes.map((shoe) => (
            <Shoe shoe={shoe} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch(`${API_URL}/api/shoes`)
  const shoes = await res.json()

  return {
      props: { shoes },
  }
}


