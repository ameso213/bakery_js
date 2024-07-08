import React from 'react';
import './home.css'; 
import logo from '../components/mylogo.png'; 


const Home = () => (
  <div className="home-container">
    <img src={logo} alt="Faith's Confectionery Logo" className="logo-image" />
    <h1 className="bakery-name">Faith's Confectionery</h1>
    <h3>Delight in Every Bite</h3>
   
    
  </div>
);

export default Home;
