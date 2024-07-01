import React, { useState } from 'react';
import './login.css';

const UserAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [robotVerified, setRobotVerified] = useState(false);
  const [resetTokenSent, setResetTokenSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!robotVerified) {
      showNotification('Please verify that you are not a robot.');
      return;
    }

    // Simulated authentication logic
    setTimeout(() => {
      setIsLoggedIn(true);
      setUser({ name: 'John Doe', orders: [{ id: 1, product: 'Bread', date: '2024-06-25' }] });
      showNotification('Login successful.');
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    showNotification('Logged out successfully.');
  };

  const handleForgotPassword = () => {
    showNotification('Please use your email or username to reset your password.');
  };

  const handleVerifyRobot = () => {
    setRobotVerified(true);
    showNotification('You are verified as not a robot.');
  };

  const handleSignUp = () => {
    showNotification('Redirect to Sign Up page or form.');
    // Implement navigation to sign up page or form
  };

  const showNotification = (message) => {
    // Replace with your preferred notification method (e.g., toast, alert component)
    alert(message);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <h2>Order History</h2>
          <ul>
            {user.orders.map(order => (
              <li key={order.id}>{order.product} - {order.date}</li>
            ))}
          </ul>
          <button onClick={handleLogout} className="btn-login">Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin} className="login-form">
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
            <a href="#" className="link" onClick={handleSignUp}>Create Account</a>
          </div>
          <div className="terms-conditions">
            <a href="#terms" className="link" onClick={() => showNotification(`
              1. Use of Service: By using our services, you agree to comply with all applicable laws and regulations.
              2. Privacy Policy: Your privacy is important to us. Please review our privacy policy to understand our practices.
              3. Payment Terms: All purchases made through our service are final and non-refundable.
              4. User Conduct: You agree not to use our service for any unlawful or prohibited activities.
              5. Limitation of Liability: We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.
            `)}>Terms and Conditions</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
