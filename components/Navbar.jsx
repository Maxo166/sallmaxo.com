import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
        <nav className={"navbar is-fixed-top " + styles.sm_navbar} role="navigation" aria-label="main navigation">
            <div className={`container ${styles.container}`}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item"> About </a>
                        <a className="navbar-item"> Contact </a>
                        <a className="navbar-item"> Blog </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons are-small">
                                <a className="button is-primary"><strong>Sign up</strong></a>
                                <a className="button is-light">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;