import { Link, useLocation } from 'react-router-dom';
import "../index.css";
import logo from "../images/logo.png";

const NavBar = () => {
    const routes = useLocation().pathname;
    return (
        <nav className="navbar">
            <div className="header">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <h1>DEL ROSARIO INFORMATION MANAGEMENT SYSTEM</h1>
                <div className="login">LOGIN</div>
            </div>
            <div className="links">
                <Link to="/" className={(routes === "/") ? 'active' : ''}>HOME</Link>
                <Link to="/events" className={(routes === "/events") ? 'active' : ''}>EVENTS</Link>
                <Link to="/about"  className={(routes === "/about") ? 'active' : ''}>ABOUT US</Link>
                <Link to="/contact" className={(routes === "/contact") ? 'active' : ''}>CONTACT US</Link>
            </div>
        </nav>
    );
}

export default NavBar;