import { Link } from "react-router-dom";
import "../assets/css/style.css"

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg ">
             <Link to="/" className="navbar-brand">Inicio</Link>
                    <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/peliculas">Películas </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/programas">Programas</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/personas">Personas</Link>
                    </li>
                     </ul>
                </div>
            </nav>  
        </div>
    )
}

export default Navbar;