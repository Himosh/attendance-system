import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import './Hero.css';
import Background from '../../assets/Background.svg';

function Hero() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logOut = () => {
    authService.logout();
    setCurrentUser(undefined);
    setIsAuthenticated(true);
    navigate('/');
  };

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="container-left">
        <h1>{!isAuthenticated ? `Welcome back` : 'It’s seamless, fast & simple.'}</h1>
        <p>Attendance System is a modern solution for tracking attendance. It is a fast, reliable and simple way to track attendance.</p>
        {!isAuthenticated ? (
          <button className='navbar-login' onClick={logOut}>
            <Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Logout</Link>
          </button>
        ) : (
          <button className='navbar-login'>
            <Link style={{ textDecoration: 'none', color: '#626262' }} to='/login'>Login</Link>
          </button>
        )}
      </div>
      <div className="container-right">
        <img src={Background} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
