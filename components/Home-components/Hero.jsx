import styles from '../../styles/Home.module.css'
import Section from '../Section';
const Hero = () => {
    return ( 
        <section className={"hero has-background-danger-light is-fullheight "+ styles.sm_hero_bg}>
            <div className="hero-body ">                
                <Section>
                    <p className="title">
                        Fullheight hero
                    </p>
                    <p className="subtitle">
                        Fullheight subtitle
                    </p>
                </Section>
            </div>                
        </section>
     );
}
 
export default Hero;