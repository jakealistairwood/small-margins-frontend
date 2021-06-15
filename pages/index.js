import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
// import BannerImg from '../public/img/sm-banner-img.jpeg'

export default function Home() {
  return (
    <Layout>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h4>Introducing...</h4>
          <h1>The Hyperion Elite V2's</h1>
        </div>
      </div>
    </Layout>
  )
}
