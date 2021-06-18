import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/ArticleIndex.module.scss'

export default function ArticleIndexPage({ article }) {

    console.log(article)

    return (
        <Layout>
            <div className={styles.article}>
                <div className={styles.imgContainer}>
                    <img src={article.image.formats.medium.url} />
                </div>
                <h1>{article.Title}</h1>
                <p>{article.Description}</p>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async() => {
    const res = await fetch(`${API_URL}/articles`)
    const articles = await res.json()

    const paths = articles.map((article) => ({
        params: { slug: article.slug },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({ params: {slug} }) => {
    const res = await fetch(`${API_URL}/articles?slug=${slug}`)
    const articles = await res.json()
    
    return {
        props: {
            article: articles[0],
        }, 
        revalidate: 1
    }
}