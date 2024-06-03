import React from 'react'
import './Navbar.css'
import Profile from '../../assets/Profile.svg'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-logo">
            <h1>Attendance System</h1>
        </div>
        <span className="navbar-right">
            <button>Logout</button>
            <img src={Profile} alt="User" />
        </span>
    </div>
  )
}

export default Navbar