import React, { Suspense } from 'react';
import ProductProvider from 'components/Basket/ProductProvider';
import { NavLink, Outlet } from 'react-router-dom';
import { NavigateBasket, StyledNavLink } from 'components/Basket/Burger.styled';
import { BsBasket3Fill, BsHeartFill } from 'react-icons/bs';
import { Loading } from 'components/Loader/Loading';

export default function BasketPage() {
  return (
    <ProductProvider>
      <NavigateBasket>
        <NavLink className="home" to="" end>
          Home
        </NavLink>
        <NavLink className="burgers" to="burger">
          Burgers
        </NavLink>
        <StyledNavLink to="favorites">
          <BsHeartFill className="icon-top-heart" />
        </StyledNavLink>
        <StyledNavLink to="order">
          <BsBasket3Fill className="icon-top-basket" />
        </StyledNavLink>
      </NavigateBasket>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </ProductProvider>
  );
}
