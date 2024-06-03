import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Attendance System</h1>
        <p>Log in to Attendance System.</p>
        <form>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
                   
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login