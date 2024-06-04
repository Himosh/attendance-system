import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import authService from './services/authService';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();
  console.log('Is authenticated:', isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
