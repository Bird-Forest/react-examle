import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { setUser } from 'store/slices/userSlice';

export const SignUp = () => {
  const dispatch = useDispatch();
  // const {push} = useHistory
  const handleRegister = (email, password) => {
    const auth = getAuth();

    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
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
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error);
      });
  };

  return (
    <div>
      <Form title="Register" handleClick={handleRegister} />
    </div>
  );
};
