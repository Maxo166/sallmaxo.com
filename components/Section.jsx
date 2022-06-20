const Section = ({children, divider}) => {
    return ( 
        <section className={`section ${ divider } `}>
            <div className="container">
                {children}
            </div>
        </section>
     );
}
 
export default Section;