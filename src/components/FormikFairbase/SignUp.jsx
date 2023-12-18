import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   BtnFormFB,
//   Input,
//   InputBox,
//   InputPass,
//   Label,
//   TitleFB,
//   WrapFormFB,
// } from 'components/RegistrationFB/Form.styled';

import FormikSignUp from './FormikSignUp';

export default function SignUp() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const auth = getAuth();

  const handleSignUp = (email, password) => {
    // evt.preventDefault();
    // const email = evt.target.elements.email.value;
    // const password = evt.target.elements.pass.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential.user);
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
            token: userCredential.user.accessToken,
          })
        );
      })
      .catch(error => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div>
      <FormikSignUp onRegistration={handleSignUp} />
    </div>
  );
}

// <h1>Registeration Page</h1>
// <TitleFB>Form</TitleFB>
//  <WrapFormFB id="signup" onSubmit={event => handleRegister(event)}>
//    <InputBox>
//      <input type="name" name="name" required="required" className="input" />
//      <span className="span">Name</span>
//    </InputBox>

//    <Input type="email" name="email" placeholder=" " required="required" />
//    <Label>Enter your name</Label>
//    <InputPass
//      type="password"
//      name="pass"
//      placeholder="Password"
//      required="required"
//    />
//    <span>Password</span>
//    <BtnFormFB type="submit">Sign In</BtnFormFB>
//    <Link to={backLinkHref}>Home</Link>
//  </WrapFormFB>;
