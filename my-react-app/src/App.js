// App.js
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
import BakeryCart from './components/carts'; // Adjust the path as per your project structure
import Footer from './components/footer'; // Adjust the path as per your project structure

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar BakeryCart={BakeryCart} /> {/* Pass bakeryCart as a prop */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products BakeryCart={BakeryCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout BakeryCart={BakeryCart} />} />
          <Route path="/blogs" element={<Blog />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
