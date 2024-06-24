import React from 'react';
import './contact.css';

const Contact = () => (
  <div className="contact-container">
    <h4>Contact Us</h4>
    <p>Feel free to reach out to us for any inquiries or orders!</p>

    <div className="contact-details">
      <h2>Contact Details:</h2>
      <p><strong>Phone:</strong>+256773491110</p>
      <p><strong>Email:</strong> faithsconfidentionalbakery@gmail.com</p>
      <p><strong>Address:</strong>Kyanja Ring Road-Kampala</p>
    </div>

    <form className="contact-form">
      <h2>Send Us a Message:</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  </div>
);

export default Contact;
