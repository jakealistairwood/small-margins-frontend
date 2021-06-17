import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'

export default function ShoeIndexPage({ shoe }) {
    return (
        <Layout>

        </Layout>
    )
}

export const getStaticPaths = async() => {
    const res = await fetch(`${API_URL}/api/shoes`)
    const shoes = await res.json()

    const paths = shoes.map((shoe) => ({
        params: { slug: shoe.slug },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({ params: {slug} }) => {
    const res = await fetch(`${API_URL}/api/shoes/${slug}`)
    const shoes = await res.json()
    
    return {
        props: {
            shoe: shoes[0]
        }, 
        revalidate: 1
    }
}