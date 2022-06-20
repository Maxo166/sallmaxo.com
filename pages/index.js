import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Home-components/Hero'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="has-navbar-fixed-top">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header>
          <Hero/>
        </Header>
      </main>

      <Section>
          <Footer />
      </Section>        
    </div>
  )
}
