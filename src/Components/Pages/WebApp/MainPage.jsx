import React, { useContext } from 'react';
import Sidebar from '../../Navbar/Sidebar';
import './MainPage.css';
import { UsernameContext } from '../UsernameContext';  

export default function MainPage({ children }) {

    const { user } = useContext(UsernameContext); 
    return (
        <div className="main-container">
            <Sidebar />
            <div className="content-wrapper">
                <div className="LoggedIn">
                    <p className="LoggedInAs">
                        Συνδεδεμένος ως {user} 
                    </p>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}