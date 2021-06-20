import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import Article from '../../components/Article'
import styles from '../../styles/pages/Articles.module.scss'
import Link from 'next/link'

export default function ArticlesPage({ articles }) {
    console.log(articles)
    return (
        <Layout>
            <div className={styles.articles}>
                <div className={styles.pageHeader}>
                    <h1>All our running shoes</h1> 
                </div>
                <div className={styles.articlesContainer}>
                {articles.map((article) => (
                    <Link href={`/articles/${article.slug}`}>
                    <a className={styles.article}>
                        <div className={styles.imgContainer}>
                            <img src={article.image.formats.thumbnail.url} alt={article.Title} />
                        </div>
                        <div className={styles.articleInfo}>
                            <h5>{article.category}</h5>
                            <h3>{article.Title}</h3>
                        </div>
                    </a>
                    </Link>
                ))}
                </div>  
            </div>
        </Layout>
    )
}

export const getStaticProps = async() => {
    const res = await fetch(`${API_URL}/articles`)
    const articles = await res.json()
    return {
        props: { articles }
    }
}
