import "./css/style.css";

function Navbar() {
    return(
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="./">Películas</a>
                </li>
                <li className="nav-item px-2">
                    <a className="nav-link" href="./">Programas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./">Más</a>
                </li>
             </ul>
        </div>
    )
}

export default Navbar;