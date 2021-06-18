import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'

export default function ArticlesPage({ articles }) {
    console.log(articles)
    return (
        <Layout>
            <div>
                <h1>All our running shoes</h1>    
            </div>
            <div>
                {articles.map((article) => (
                    <h1>{article.Title}</h1>
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
