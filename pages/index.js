import Layout from '../components/Layout'
import styles from '../styles/pages/Home.module.scss'
import { API_URL } from '../config/index'
import Shoe from '../components/Shoe'
import Link from 'next/link'

export default function Home({ shoes }) {

  return (
    <>
      <Layout>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>Supercharge Your Efforts</h1>
            <p>Hit all your PB's with the Nike Vapofly Next% 2</p>
            <button className={styles.bannerBtn}>Shop Now</button>
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
        <section className={styles.articles}>
          <div className={styles.sectionHeader}>
            <h2>Latest Articles</h2>
            <div className={styles.designDetail}></div>
          </div>
          <div className={styles.articleContainer}>
            <div className={`${styles.article} ${styles.article1}`}>
              <div className={styles.articleHeader}>
                <h5>Health</h5>
                <h4>5 exercises to beat IT Band Syndrome</h4>
              </div>
            </div>
            <div className={`${styles.article} ${styles.article2}`}>
              <div className={styles.articleHeader}>
                <h5>Guides</h5>
                <h4>Our beginner-friendly guide to running</h4>
              </div>
            </div>
            <div className={`${styles.article} ${styles.article3}`}>
              <div className={styles.articleHeader}>
                <h5>Health</h5>
                <h4>Top 10 health benefits of running</h4>
              </div>
            </div>
          </div>
          <Link href="/articles">
          <button className={styles.primaryBtn}>View More</button>
          </Link> 
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch(`${API_URL}/shoes`)
  const shoes = await res.json()

  return {
      props: { shoes },
  }
}


