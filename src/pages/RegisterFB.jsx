import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { WrapFairbase, WrapLinkSign } from './RegisterFB.styled';
import { Loading } from 'components/Loader/Loading';
import { WrapNavigate, WrapRender, WrapRight } from './Page.styled';

export default function RegistrationFB() {
  return (
    <>
      <WrapRight>
        <WrapNavigate>
          <NavLink className="navigate" to="auth">
            Authorization
          </NavLink>
          <NavLink className="navigate" to="sign">
            Sign in
          </NavLink>
        </WrapNavigate>
        <WrapRender>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </WrapRender>
      </WrapRight>
    </>
  );
}
