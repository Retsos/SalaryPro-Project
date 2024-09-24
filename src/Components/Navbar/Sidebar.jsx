import React from 'react';
import './Sidebar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('/LoginPage');
    };

    function CustomLink({ to, children, ...props }) {
        const path = location.pathname;
        const isActive = path === to;

        return (
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                <Link className="nav-link" to={to} {...props}>
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link to="/MainPage" className="logo-link">
                    <span className="custome-logo">SalaryPro</span>
                </Link>
            </div>
            <ul className="nav navibar">
                <CustomLink to="/Employers">Οι Υπάλληλοι μου</CustomLink>
                <CustomLink to="/Employee">Νέος Υπάλληλος</CustomLink>
                <CustomLink to="#">Link</CustomLink>
            </ul>
            <button className="logout-btn" onClick={handleLogoutClick}>
                Logout
            </button>
        </div>
    );
}