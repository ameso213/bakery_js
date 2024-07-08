import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
import Contact from './components/contacts'; 
import Checkout from './components/checkOut';
import AboutUs from './components/aboutUs';

import Login from './components/login';
import Blog from './components/blogs';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact component */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
          
        </Routes>
        
         {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
