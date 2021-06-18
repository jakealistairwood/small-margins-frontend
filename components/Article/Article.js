import styles from './Article.module.scss'
import Link from 'next/link'

const Article = ({ article }) => {
    return (
        <Link href={`/articles/${article.slug}`}>
            <div className={styles.articleCard} style={{
            backgroundImage: `url(${article.image.formats.medium.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
              <div className={styles.articleHeader}>
                <h5>{article.category}</h5>
                <h4>{article.Title}</h4>
              </div>
          </div>
        </Link>
    )
}

export default Article
