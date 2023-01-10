import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Menu() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Gryffindor</Link>
                </li>
                <li>
                    <Link to="/">Slytherin</Link>
                </li>
                <li>
                    <Link to="/">Hufflepuff</Link>
                </li>
                <li>
                    <Link to="/">Ravenclaw</Link>
                </li>
            </ul>
        </nav>
    )
}