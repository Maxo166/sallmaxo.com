import styles from '../../styles/Home.module.css'
import Section from '../Section';
const Hero = () => {
    return ( 
        <section className={"hero has-background-danger-light is-fullheight "+ styles.sm_hero_bg}>
            <div className={`hero-body ${styles.sm_hero_body}`}>                
                <Section>
                    <p className="subtitle">Hey there, I’m Robert</p>
                    <p className="title">
                        Freelance UI Designer & Web Developer
                    </p>
                    <p>I help business grow by crafting amazing web experiences.
                         If you’re looking for a designer and developer that likes to get stuff done, let’s talk.
                    </p>
                    <br />
                    <div className="buttons">
                        <a href="" className="mr-4">sallmaxo@gmail.com</a>
                        <a herf="">+0112 441 43 25</a>
                    </div>
                    <button className="button is-link">See my woek</button>
                </Section>
            </div>                
        </section>
     );
}
 
export default Hero;