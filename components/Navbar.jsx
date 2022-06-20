import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
        <nav class={"navbar is-fixed-top " + styles.sm_navbar} role="navigation" aria-label="main navigation">
            <div className='container'>
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">Home</a>
                        <a class="navbar-item"> About </a>
                        <a class="navbar-item"> Contact </a>
                        <a class="navbar-item"> Blog </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons are-small">
                                <a class="button is-primary"><strong>Sign up</strong></a>
                                <a class="button is-light">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;