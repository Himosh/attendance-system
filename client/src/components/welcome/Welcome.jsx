import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import './Welcome.css';
import Background from '../../assets/Background.svg';

function Welcome() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const user = authService.getCurrentUser();
        console.log('Welcome useEffect - user:', user);
        if (user) {
            setCurrentUser(user);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const logOut = () => {
        authService.logout();
        setCurrentUser(undefined);
        navigate('/');
    };

    return (
        <div className="hero-container">
            <div className="container-left">
                <h1>Welcome back!</h1>
                <p>Attendance System is a modern solution for tracking attendance. It is a fast, reliable and simple way to track attendance.</p>
                <button className='navbar-login' onClick={logOut}>
                    Logout
                </button>
            </div>
            <div className="container-right">
                <img src={Background} alt="hero" />
            </div>
        </div>
    );
}

export default Welcome;
