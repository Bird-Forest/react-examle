import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import {
  BtnFormFB,
  InputEmail,
  InputPass,
  TitleFB,
  WrapFormFB,
} from 'components/FormUser/Form.styled';

export default function SignUp() {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const auth = getAuth();

  const handleRegister = evt => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.pass.value;
    console.log(evt);

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
      <h1>Registeration Page</h1>
      <TitleFB>Form</TitleFB>
      <WrapFormFB id="signup" onSubmit={event => handleRegister(event)}>
        <InputEmail type="email" name="email" placeholder="email" />
        <InputPass type="password" name="pass" placeholder="password" />
        <BtnFormFB type="submit">Sign In</BtnFormFB>
        <Link to={backLinkHref}>Home</Link>
      </WrapFormFB>
    </div>
  );
}
