import React from 'react';
import logo from './logo.png';
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/LoginPage');
    };

    function CustomLink({ to, children, ...props }) {
        const path = location.pathname;
        const isActive = path === to;

        return (
            <li className="nav-item">
                <Link
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <>
            <nav className="navbar nav bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">
                        <img src={logo} width="50" height="50" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav justify-content-center">
                            <CustomLink to="/Home">Αρχική</CustomLink>
                            <CustomLink to="/Contact">Επικοινωνία</CustomLink>
                        </ul>
                        <button className="login ms-auto" onClick={handleLoginClick}>Login</button>
                    </div>
                </div>
            </nav>
        </>
    );
}