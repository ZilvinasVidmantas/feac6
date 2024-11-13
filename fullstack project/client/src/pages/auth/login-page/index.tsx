import { login } from '@api';
import React, { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ email, password });
      // Išsaugoti prisijungusio vartotojo duomenis i global state (react | zustand | redux)
      // išsaugoti token'ą į local storage
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {errorMessage && (
      <p>
        {errorMessage}
        <button type="button" onClick={() => setErrorMessage(null)}>X</button>
      </p>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
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
  );
}
