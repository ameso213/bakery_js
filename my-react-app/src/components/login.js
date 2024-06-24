import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [robotVerified, setRobotVerified] = useState(false); // State to track if robot is verified
  const [resetTokenSent, setResetTokenSent] = useState(false); // State to track if reset token is sent

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!robotVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }

    // Simulated authentication logic (e.g., send reset token to email/phone)
    // In a real application, this would involve backend API calls and secure token generation

    // Simulating token sent to email or phone number
    setTimeout(() => {
      setResetTokenSent(true);
      alert('Reset token sent to your email or phone number.');
    }, 2000); // Simulate delay of 2 seconds

    console.log('Email:', email, 'Password:', password);
  };

  const handleForgotPassword = () => {
    alert('Please use your email or username to reset your password.');
  };

  const handleVerifyRobot = () => {
    // Simulate verification check (e.g., CAPTCHA)
    setRobotVerified(true);
    alert('You are verified as not a robot.');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={robotVerified}
              onChange={() => setRobotVerified(!robotVerified)}
            /> Verify if you are not a robot
          </label>
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="login-links">
        <a href="#" className="link" onClick={handleForgotPassword}>Forgot Password?</a>
        <a href="/signup" className="link">Sign Up</a>
      </div>
      <div className="terms-conditions">
        <a href="#terms" className="link" onClick={() => alert(`
          1. Use of Service: By using our services, you agree to comply with all applicable laws and regulations.
          2. Privacy Policy: Your privacy is important to us. Please review our privacy policy to understand our practices.
          3. Payment Terms: All purchases made through our service are final and non-refundable.
          4. User Conduct: You agree not to use our service for any unlawful or prohibited activities.
          5. Limitation of Liability: We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.
        `)}>Terms and Conditions</a>
      </div>
    </div>
  );
};

export default Login;
