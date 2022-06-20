import { FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer className="footer columns">
            <div class="content column is-4">
                <p>(c) Copyright Robert Fox 2022. All rights reserved.</p>

            </div>
            <div class="content column is-4">
                <div className="">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
            <div class="content column is-4">
                <div className="buttons are-small">
                    <a href="" className="button is-light"> <i><FaGithub /></i></a>
                    <a href="" className="button is-info is-light"> <i><FaTwitter /></i></a>
                    <a href="" className="button is-danger is-light"> <i><FaYoutube /></i></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;