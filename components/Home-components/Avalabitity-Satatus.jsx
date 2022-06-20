const AvalabilityStatus = () => {
    return ( 
        <div className="columns">
            <div className="column is-half has-text-centered-mobile-only has-text-left-tablet">
                <h3 className="subtitle"> I’m currently available for freelance work. </h3>
                <h1 className="title mt-6">If you’re looking for a designer and developer that likes to get stuff done, let’s talk.</h1>

                <p className="is-flex is-align-items-center">Got a project in mind?
                    <a href="" className="button ml-4">Let’s talk!</a>
                </p>
            </div>
            <div className="column is-half is-flex-direction-column is-flex is-align-items-end is-justify-content-center">
                <div className="has-text-right">
                    <a className="is-block" href="mailto:sallmaxo@gmail.com">sallmaxo@gmail.com</a>
                    <a className="is-block" href="tel:+012 441 43 25">+012 441 43 25</a>
                </div>
            </div>
        </div>
     );
}
 
export default AvalabilityStatus;