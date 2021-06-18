import Layout from '../components/Layout'
import styles from '../styles/pages/Home.module.scss'
import { API_URL } from '../config/index'
import Shoe from '../components/Shoe'
import Article from '../components/Article'
import Link from 'next/link'
import { uuid } from 'uuidv4'

export default function Home({ shoes, articles }) {

  console.log(articles)

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
              <Shoe key={uuid()} shoe={shoe} />
            ))}
          </div>
        </section>
        <section className={styles.articles}>
          <div className={styles.sectionHeader}>
            <h2>Latest Articles</h2>
            <div className={styles.designDetail}></div>
          </div>
          <div className={styles.articleContainer}>
            {articles.map((article) => (
              <Article key={uuid()} article={article} />
            ))}
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
  const resOne = await fetch(`${API_URL}/shoes`)
  const resTwo = await fetch(`${API_URL}/articles`)
  const shoes = await resOne.json()
  const articles = await resTwo.json()

  return {
      props: { 
        shoes, 
        articles: articles.slice(0, 3) 
      },
  }
}


