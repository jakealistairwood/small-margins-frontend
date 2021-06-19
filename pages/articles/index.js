import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import Article from '../../components/Article'
import styles from '../../styles/pages/Articles.module.scss'
import Link from 'next/link'

export default function ArticlesPage({ articles }) {
    console.log(articles)
    return (
        <Layout>
            <div className={styles}>
                <h1>All our running shoes</h1>    
            </div>
            <div>
                {articles.map((article) => (
                    <Link href={`/articles/${article.slug}`}>
                    <a>
                        <img src={article.image.formats.small.url} alt={article.Title} />
                        <h3>{article.Title}</h3>
                    </a>
                    </Link>
                ))}
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
