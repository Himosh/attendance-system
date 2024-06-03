import React from 'react'
import './Hero.css'
import Background from '../../assets/Background.svg'

function Hero() {
  return (
    <div className="hero-container">
      <div className="container-left">
        <h1>It’s seamless, fast & simple. </h1>
        <p>Attendance System is a modern solution for tracking attendance. It is a fast, reliable and simple way to track attendance.</p>
        <button>Login</button>
      </div>
      <div className="container-right">
        <img src={Background} alt="hero" /> 
      </div>
    </div>
  )
}

export default Hero