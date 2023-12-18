import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import {
//   Container,
//   WrapLeft,
//   WrapLink,
//   WrapRight,
// } from './SharedLayout.styled';
import { Loading } from 'components/Loader/Loading';
import { Container, WrapLeft, WrapRight } from './Page.styled';

export default function SharedLayout() {
  return (
    <Container>
      <WrapLeft>
        <NavLink className="navigate" to="/">
          Home
        </NavLink>
        <NavLink className="navigate" to="/fairbase">
          Formik
        </NavLink>
        <NavLink className="navigate" to="/player">
          Player
        </NavLink>
        <NavLink className="navigate" to="/reader">
          Reader
        </NavLink>
        <NavLink className="navigate" to="/request">
          Requests
        </NavLink>
        <NavLink className="navigate" to="/hooks">
          Hooks
        </NavLink>
        <NavLink className="navigate" to="/product">
          Filters
        </NavLink>
        <NavLink className="navigate" to="/basket">
          Basket
        </NavLink>
      </WrapLeft>
      <WrapRight>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapRight>
    </Container>
  );
}
