import React, { useState } from 'react';
import './account.css';
const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulated fetch request for demonstration purposes
    fetch('/api/create-account', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, userType }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setUserType('');
  };

  return (
    <div className="create-account-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="" disabled>User Type</option>
          <option value="customer">Customer</option>
          <option value="admin">Administrator</option>
          <option value="staff">Staff</option>
        </select><br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
