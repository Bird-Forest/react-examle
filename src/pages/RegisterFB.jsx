import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { WrapFairbase, WrapLinkSign } from './RegisterFB.styled';
import { Loading } from 'components/Loader/Loading';

export default function RegistrationFB() {
  return (
    <div>
      <WrapFairbase>
        <WrapLinkSign>
          <NavLink className="navigate" to="auth">
            Authorization
          </NavLink>
          <NavLink className="navigate" to="sign">
            Sign in
          </NavLink>
        </WrapLinkSign>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapFairbase>
    </div>
  );
}
