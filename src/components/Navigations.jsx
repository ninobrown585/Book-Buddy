/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to= "/books"> Books </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/SingleBook"> Single Books</Link>
                </li> */}
            </ul>
        </div>
    );
}