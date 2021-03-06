import Head from 'next/head'
import AvalabilityStatus from '../components/Home-components/Avalabitity-Satatus'
import Companies from '../components/Home-components/Companies'
import Testimonials from '../components/Home-components/Testimonials'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Home-components/Hero'


export default function Home() {
  return (
    <div className="has-navbar-fixed-top">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">           
        <Header>
          <Hero/>
        </Header>  
        
        <Section divider={styles.sm_bottom_divider}>
          <Companies />
        </Section>

        <Section divider={styles.sm_bottom_divider}>
          <Testimonials/>
        </Section>

        <Section divider={styles.sm_bottom_divider}>
          <AvalabilityStatus />
        </Section>
      </main>  
    </div>
  )
}
