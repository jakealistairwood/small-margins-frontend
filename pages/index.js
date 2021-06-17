import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import axios from 'axios'
import { API_URL } from '../config/index'
import Shoe from '../components/Shoe'

export default function Home({ shoes }) {

  return (
    <>
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
      <section className={styles.articles}>
        <div className={styles.sectionHeader}>
          <h2>Latest Articles</h2>
          <div className={styles.designDetail}></div>
        </div>
        <div className={styles.articleContainer}>
          <div className={`${styles.article} ${styles.article1}`}>
            <h2>5 exercises to beat IT Band Syndrome</h2>
          </div>
          <div className={`${styles.article} ${styles.article2}`}>
            <h2>Our beginner-friendly guide to running</h2>
          </div>
          <div className={`${styles.article} ${styles.article3}`}>
            <h2>Top 10 health benefits of running</h2>
          </div>
        </div> 
      </section>
    </>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch(`${API_URL}/api/shoes`)
  const shoes = await res.json()

  return {
      props: { shoes },
  }
}


