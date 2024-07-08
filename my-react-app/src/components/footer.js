import React from 'react';

import facebookLogo from './fb.png';
import twitterLogo from './twit.png';
import instagramLogo from './igg.png';
import emailLogo from './emaail.png';
import locationLogo from './location.png'; 

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2023 Faith's Confectionery Bakery</p>

    <div className="footer-links">
      <div className="footer-column">
        <p><a href="/privacy">Privacy Policy</a></p>
        <p><a href="/terms">Terms and Conditions</a></p>
      </div>
      
      <div className="footer-column">
        <p><a href="/services">Services</a></p>
        <p><a href="https://www.facebook.com/X">Facebook</a></p>
        <p><a href="https://www.instagram.com/X">Instagram</a></p>
        <p><a href="mailto:email@example.com">Email</a></p>
      </div>

      <div className="footer-column">
        <p><a href="/more">More</a></p>
        
      </div>
    </div>

    <div className="social-media-links">
      <div className="social-media-icon-container">
        <img src={twitterLogo} alt="Twitter" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
      </div>
      <div className="social-media-icon-container">
        <img src={facebookLogo} alt="Facebook" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
      </div>
      <div className="social-media-icon-container">
        <img src={instagramLogo} alt="Instagram" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
      </div>
      <div className="social-media-icon-container">
        <img src={emailLogo} alt="Email" className="social-media-icon" />
        <p className="icon-username">faithsconfectionary256@.com</p>
      </div>
    </div>

    <div className="location-info">
      <img src={locationLogo} alt="Location" className="location-icon" />
      <p>Kyanja Ring Road-Kampala</p>
    </div>
  </footer>
);

export default Footer;
