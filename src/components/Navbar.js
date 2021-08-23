import { Link } from "react-router-dom";
import "./css/style.css";

function Navbar() {
    return(
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                 <Link to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link to="/peliculas">Películas</Link>
                </li>
                <li className="nav-item">
                <Link to="/programas">Programas</Link>
                </li>
             </ul>
        </div>
    )
}

export default Navbar;