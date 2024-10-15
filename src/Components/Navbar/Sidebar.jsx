import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";  

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false); 

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
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); 
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link to="/MainPage" className="logo-link">
                    <span className="custome-logo">SalaryPro</span>
                </Link>
            </div>
            <ul className="nav flex-column navibar">
                <CustomLink to="/Employers">Οι Υπάλληλοι μου</CustomLink>
                <CustomLink to="/Employee">Προσθήκη Νέου Υπαλλήλου</CustomLink>
                <li className="nav-item">
                    <button 
                        className="nav-link text-white text-decoration-none" 
                        onClick={toggleDropdown} 
                        style={{ width: "100%" }}
                    >
                        Διαχείριση Προσωπικού {dropdownOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} 
                    </button>
                </li>
                <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
                    <CustomLink to="/Action2">Μισθοδοσίες</CustomLink>
                    <CustomLink to="/Wraria">Ωράρια</CustomLink>
                    <CustomLink to="/Action3">Action 3</CustomLink>
                </div>
            </ul>
            <button className="logout-btn" onClick={handleLogoutClick}>
                Logout
            </button>
        </div>
    );
}