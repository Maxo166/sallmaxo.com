import '../styles/globals.css'
import 'bulma/css/bulma.min.css'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Home-components/Hero'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (<>
   <Navbar />
    
    <Component {...pageProps} />
  
      <Section divider={styles.sm_bottom_divider}>
        <Footer />
      </Section>
    </>
  )
}

export default MyApp
