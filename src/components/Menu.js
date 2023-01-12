import { Outlet, Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = () => {

    return (
        <>
            <nav className="navbar-container">
                <ul className="links">
                    <li className="home">
                        <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                    </li>
                    <ul className="houses">
                        <li>
                            <Link className="hover-underline-animation" to="/Gryffindor">Gryffindor</Link>
                        </li>
                        <li>
                            <Link className="hover-underline-animation" to="/Slytherin">Slytherin</Link>
                        </li>
                        <li>
                            <Link className="hover-underline-animation" to="/Hufflepuff">Hufflepuff</Link>
                        </li>
                        <li>
                            <Link className="hover-underline-animation" to="/Ravenclaw">Ravenclaw</Link>
                        </li>
                    </ul>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}