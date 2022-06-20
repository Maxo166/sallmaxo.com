import styles from '../../styles/Home.module.css'

const Testimonials = () => {
    return ( 
        <div className="is-flex is-justify-content-center">
            <div className={`box ${ styles.sm_tesimonial_card } `}>
                <h3 className="subtitle" width="400">
                    “Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.”
                </h3>
                <div className="figures is-flex is-justify-content-center">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://unsplash.it/50/48" />
                    </figure>
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://unsplash.it/48/48" />
                    </figure>
                </div>
                <div className="basic-info mt-4">
                    <a href="" className='title is-6'>Maxo sall</a>
                    <br />
                    <a href="mailto:habib.12@gmail.com">habib.12@gmail.com</a>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;