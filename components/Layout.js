import Head from 'next/head'
import Header from './Header'
import Subheader from './Subheader'

const Layout = ({ title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} keywords={keywords} />
            </Head>
            <Header />  
            <Subheader />
            <div className="container">
                {children}
            </div>  
        </div>
    )
}

Layout.defaultProps = {
    title: 'Small Margins | The online marketplace for all your running needs',
    description: 'Discover our products and blogs to help you achieve your running potential',
    keywords: 'running, shoes, blogs, injury prevention etc'
}

export default Layout