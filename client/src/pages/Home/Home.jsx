import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';

function Home() {

  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
