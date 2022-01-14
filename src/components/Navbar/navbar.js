import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <div className="navbar-brand">
                        <FontAwesomeIcon className="logo d-inline-block align-text-top" icon={faFutbol} style={{color: "green"}}/>
                    </div>
                        <div className="collapse navbar-collapse llamados" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/" style={{color: "black"}}>Home</Link>
                            <Link className="nav-link" to="/futbol" style={{color: "black"}}>Futbol</Link>
                            <Link className="nav-link" to="/tenis" style={{color: "black"}}>Tenis</Link>
                            <Link className="nav-link" to="/voley" style={{color: "black"}}>Voley</Link>
                        <div className='contacto d-flex'>
                            <FontAwesomeIcon className="logoContacto logo d-inline-block align-text-top" icon={faIdCard}/>
                            <div className="nav-link active">Contacto</div>
                        </div>
                        </div>
                        </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;