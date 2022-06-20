import styles from '../../styles/Home.module.css'
import Section from '../Section';
const Hero = () => {
    return ( 
        <section class={"hero has-background-danger-light is-fullheight "+ styles.sm_hero_bg}>
            <div class="hero-body ">                
                <Section>
                    <p class="title">
                        Fullheight hero
                    </p>
                    <p class="subtitle">
                        Fullheight subtitle
                    </p>
                </Section>
            </div>                
        </section>
     );
}
 
export default Hero;