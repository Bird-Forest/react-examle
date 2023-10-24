import { SignUp } from 'components/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <h1>RegisterPage</h1>
      <SignUp />
      <p>
        Alredy heve an account?<Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
