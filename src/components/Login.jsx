import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { setUser } from 'store/slices/userSlice';

export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(error => {
        alert('Invalid user');
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error);
      });
  };

  return (
    <div>
      <Form title="Sign in" handleClick={handleLogin} />
    </div>
  );
};
