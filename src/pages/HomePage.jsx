// import { useAuth } from 'hooks/user-auth';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { removeUser } from 'store/slices/userSlice';

export default function HomePage() {
  // const dispatch = useDispatch();
  // const { isAuth, email } = useAuth;
  return (
    <div>
      <h3>Welcome!</h3>
    </div>
  );
}

// xport default function HomePage() {
//   const dispatch = useDispatch();
//   const { isAuth, email } = useAuth;
//   return isAuth ? (
//     <div>
//       <h3>Welcome!</h3>
//       <button onClick={() => dispatch(removeUser)}>Remove {email}</button>
//     </div>
//   ) : (
//     <NavLink to="/login">Home page</NavLink>
//   );
// }
