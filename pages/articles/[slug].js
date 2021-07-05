import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/pages/ArticleIndex.module.scss'
import ReactMarkdown from 'react-markdown'

export default function ArticleIndexPage({ article }) {

    console.log(article)

    return (
        <Layout>
            <div className={styles.article}>
                <div className={styles.imgContainer}>
                    <img src={article.image.formats.medium.url} />
                </div>
                <h1>{article.Title}</h1>
                <ReactMarkdown>{article.Description}</ReactMarkdown>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async({ query: { slug }}) => {

    const res = await fetch(`${API_URL}/articles?slug=${slug}`)
    const articles = await res.json()
    
    return {
        props: {
            article: articles[0]
        }
    }
}