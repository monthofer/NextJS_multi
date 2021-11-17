import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Sarah and I am currently finishing my final year at Chapman University pursuing a 
           degree in Data Analytics. Throughout this time I have gained the technical and interpersonal 
           skills necessary to address and solve many real-world problems creatively and effectively. 
           Some of my interests include business, tech, existential psychology, fashion, futurology, 
           and the many nuances of our thought. Feel free to reach out if you think I would be a good 
           candidate for any positions postgrad or want to chat!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}