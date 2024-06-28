import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import './Navbar.css';
import Profile from '../../assets/Profile.svg';

function Navbar() {

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>Event Management</h1>
      </div>
      <span className="navbar-right">
          <button>Explore</button>
        <img src={Profile} alt="User" />
      </span>
    </div>
  );
}

export default Navbar;
