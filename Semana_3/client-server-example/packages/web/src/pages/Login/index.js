import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log('success');
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="username"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
      </fieldset>
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </form>
  );
}
