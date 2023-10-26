import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  WrapLeft,
  WrapLink,
  WrapRight,
} from './SharedLayout.styled';
import { Loading } from 'components/Loader/Loading';

export default function SharedLayout() {
  return (
    <Container>
      <WrapLeft>
        <WrapLink>
          <NavLink className="navigate" to="/">
            Home
          </NavLink>
          <NavLink className="navigate" to="/fairbase">
            Fairbase
          </NavLink>
        </WrapLink>
      </WrapLeft>
      <WrapRight>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapRight>
    </Container>
  );
}
