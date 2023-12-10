import React, { Suspense } from 'react';
import { BasketPageWrap } from './Page.styled';
import ProductProvider from 'components/Basket/ProductProvider';
import { NavLink, Outlet } from 'react-router-dom';
import {
  NavigateBasket,
  StyledNavLinkBurgers,
} from 'components/Basket/Burger.styled';
import { BsBasket3Fill, BsHeartFill } from 'react-icons/bs';
import { Loading } from 'components/Loader/Loading';
// import { GiApothecary } from 'react-icons/gi';

export default function BasketPage() {
  return (
    <ProductProvider>
      <NavigateBasket>
        <StyledNavLinkBurgers to="burger">Burgers</StyledNavLinkBurgers>
        <NavLink to="favorites">
          <BsHeartFill className="icon-top-like" />
        </NavLink>
        <NavLink to="order">
          <BsBasket3Fill className="icon-top-basket" />
        </NavLink>
      </NavigateBasket>
      <BasketPageWrap>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </BasketPageWrap>
    </ProductProvider>
  );
}
