import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://intern-task-api.bravo68web.workers.dev/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            setMessageType('success');
            setMessage('Login successful!');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessageType('error');
            setMessage(error.message);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Login</h1>
            <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <button
                type="button"
                onClick={handleLogin}
                style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Login
            </button>
            {message && (
                <div
                    style={{
                        marginTop: '20px',
                        padding: '10px',
                        color: messageType === 'success' ? 'green' : 'red',
                        border: `1px solid ${messageType === 'success' ? 'green' : 'red'}`,
                        borderRadius: '4px',
                    }}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default Login;
