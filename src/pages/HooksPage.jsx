import React, { Suspense } from 'react';
import { WrapNavigate, WrapRight } from './Page.styled';
import { NavLink, Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';

export default function HooksPage() {
  return (
    <div>
      <WrapRight>
        <WrapNavigate>
          <NavLink className="navigate" to="counter">
            Counter
          </NavLink>
          <NavLink className="navigate" to="form">
            Form
          </NavLink>
          <NavLink className="navigate" to="clock">
            Clock
          </NavLink>
          <NavLink className="navigate" to="friend">
            Friend
          </NavLink>
          <NavLink className="navigate" to="formik">
            Formik
          </NavLink>
        </WrapNavigate>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapRight>
    </div>
  );
}
// https://github.com/luxplanjay/react-21-22/tree/07-%D1%85%D1%83%D0%BA%D0%B8/src/components
