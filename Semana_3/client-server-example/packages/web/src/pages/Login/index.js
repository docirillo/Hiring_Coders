import React from 'react';

export default function Login() {
  return (
    <form action="/authenticate" method="POST">
      <fieldset>
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          mode="email"
          name="email"
          autocomplete="username"
        />
      </fieldset>

      <fieldset>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="current-password"
        />
      </fieldset>
      <button type="submit">Login</button>
    </form>
  );
}
