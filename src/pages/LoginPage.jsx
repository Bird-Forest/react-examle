import { Login } from 'components/Login';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <p>
        Or <Link to="/register">Login Page</Link>
      </p>
    </div>
  );
}
