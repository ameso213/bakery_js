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
import bakeryCart from './components/carts' // Adjust the path as per your project structure

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar bakeryCart={bakeryCart} /> {/* Pass bakeryCart as a prop */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products bakeryCart={bakeryCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout bakeryCart={bakeryCart} />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        {/* Footer component can be included here or within each component if it's consistent across all pages */}
      </div>
    </Router>
  );
};

export default App;
