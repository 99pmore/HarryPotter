import { Outlet, Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
            <nav className="navbar-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Gryffindor">Gryffindor</Link>
                    </li>
                    <li>
                        <Link to="/Slytherin">Slytherin</Link>
                    </li>
                    <li>
                        <Link to="/Hufflepuff">Hufflepuff</Link>
                    </li>
                    <li>
                        <Link to="/Ravenclaw">Ravenclaw</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}