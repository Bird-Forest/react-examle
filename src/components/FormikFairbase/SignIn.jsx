import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormikSignIn from './FormikSignIn';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   BtnFormFB,
//   InputEmail,
//   InputPass,
//   TitleFB,
//   WrapFormFB,
// } from 'components/RegistrationFB/Form.styled';

export default function SignIn() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const auth = getAuth();

  const handleSignIn = (email, password) => {
    // evt.preventDefault();
    // const email = evt.target.elements.email.value;
    // const password = evt.target.elements.pass.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
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
        alert('Invalid user');
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.error(errorMessage);
      });
    // <Link to={backLinkHref} />;
  };

  return (
    <div>
      <FormikSignIn onAutorization={handleSignIn} />
    </div>
  );
}

// <h1>Login Page</h1>
//     <TitleFB>Form</TitleFB>
//     <WrapFormFB id="login" onSubmit={event => handleLogin(event)}>
//       <InputEmail type="email" name="email" placeholder="email" />
//       <InputPass type="password" name="pass" placeholder="password" />
//       <BtnFormFB type="submit">Sign in</BtnFormFB>
//       <Link to={backLinkHref}>Home</Link>
//     </WrapFormFB>
