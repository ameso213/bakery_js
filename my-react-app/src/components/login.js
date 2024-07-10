import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/login', { email, password });

            // Example: Redirect to dashboard upon successful login
            // history.push('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Invalid email or password. Please try again.');
            } else {
                console.error('Login failed:', error);
                setError('Login failed: Please check your details and try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 style={{ color: 'blue', fontSize: '30px' }}>Login</h1>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
