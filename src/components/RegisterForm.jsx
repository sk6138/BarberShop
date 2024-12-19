import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    
    if (response.ok) {
      const contentType = response.headers.get('Content-Type');
    
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        console.log('Signup successful:', responseData);
      } else {
        const responseText = await response.text();
        console.log('Response is not JSON:', responseText);
      }
    } else {
      
      console.error('Error:', await response.text());
    }
    
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autocomplete="current-password"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autocomplete="current-password"
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
