import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import im from '../public/graphics/images/sb_donaumarina.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>        
        <meta name='author' content='Stefan Bartl' />
        <meta name='description' content=''/>
        <meta name='keywords' content=''/>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className={styles.header}>
          <h1 className={styles.hallo}>FREI:raum</h1>
          <p>Das Netzwerk der Freundschaft & Solidarität.</p>
      </header>

      <main className={styles.main}>

        <div className={styles.md1}>
          <h2>Abatz 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas explicabo vero alias atque labore, unde optio iusto, commodi, mollitia culpa facere distinctio dolorem non.</p>
        </div>
        <div className={styles.mainDiv2}>
          <h2 className={styles.mdh2}>Absatz 2</h2>
          <p className={styles.mdp2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit, aliquid hic laboriosam eum quibusdam laborum asperiores ullam repudiandae porro fugiat possimus aspernatur harum. Ipsa nam saepe odit sequi expedita.</p>
        </div>

      </main>

    </div>
  )
}

export default Home
