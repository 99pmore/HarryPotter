import { Outlet, Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gryffindor from "../assets/houses/gryffindor-light.webp"
import slytherin from "../assets/houses/slytherin-light.webp"
import hufflepuff from "../assets/houses/hufflepuff-light.webp"
import ravenclaw from "../assets/houses/ravenclaw-light.webp"

export const MobileMenu = () => {

    return (
        <>
            <nav className="mobile-navbar-container">
                <ul className="mobile-links">
                    <li className="mobile-home">
                        <Link to="/"><FontAwesomeIcon icon={ faHome } /></Link>
                    </li>
                    <li>
                        <Link to="/Gryffindor"><img src={ gryffindor } alt="Gryffindor" /></Link>
                    </li>
                    <li>
                        <Link to="/Slytherin"><img src={ slytherin } alt="Slytherin" /></Link>
                    </li>
                    <li>
                        <Link to="/Hufflepuff"><img src={ hufflepuff } alt="Hufflepuff" /></Link>
                    </li>
                    <li>
                        <Link to="/Ravenclaw"><img src={ ravenclaw } alt="Ravenclaw" /></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}