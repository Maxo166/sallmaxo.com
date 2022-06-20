import { FaAmazon, FaApple, FaMicrosoft, FaGithub } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
const Companies = () => {
    return ( 
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <p className="subtitle">I had the pleasure of working with these awesome companies</p>
            <div className="buttons are-large">
                <a className="button is-warning is-light" href=""><i><FaAmazon/></i></a>
                <a className="button is-danger is-light" href=""><i><SiAdobe/></i></a>
                <a className="button is-light" href=""><i><FaApple/></i></a>
                <a className="button is-info is-light" href=""><i><FaMicrosoft/></i></a>
                <a className="button is-light" href=""><i><FaGithub/></i></a>
            </div>
        </div>
     );
}
 
export default Companies;