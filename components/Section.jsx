import styles from "../styles/Home.module.css"
const Section = ({children, divider}) => {
    return ( 
        <section className={`section ${ divider }`}>
            <div className={`container  ${styles.container} `}>
                {children}
            </div>
        </section>
     );
}
 
export default Section;