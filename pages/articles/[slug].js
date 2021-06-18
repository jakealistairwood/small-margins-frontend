import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'

export default function ArticleIndexPage({ article }) {

    console.log(article)

    return (
        <Layout>
            <div>
                {/* <h1>{article.Title}</h1> */}
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
            shoe: articles[0],
        }, 
        revalidate: 1
    }
}