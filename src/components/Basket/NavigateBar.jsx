import React, { useContext } from 'react';
import { NavigateBasket, StyledNavLink } from './Burger.styled';
import { NavLink } from 'react-router-dom';
import { BsBasket3Fill, BsHeartFill } from 'react-icons/bs';
import { BasketContext, FavoritesContext } from './ProductProvider';

export default function NavigateBar() {
  const { goods } = useContext(BasketContext);
  const { likes } = useContext(FavoritesContext);

  const Arr1 = Array.isArray(likes) && likes.length > 0;
  const Arr2 = Array.isArray(goods) && goods.length > 0;
  return (
    <>
      <NavigateBasket>
        <NavLink className="home" to="" end>
          Home
        </NavLink>
        <NavLink className="burgers" to="burger">
          Burgers
        </NavLink>
        <StyledNavLink to="favorites">
          {Arr1 ? <span className="count">{likes.length}</span> : ' '}
          <BsHeartFill className="icon-top-heart" />
        </StyledNavLink>
        <StyledNavLink to="order">
          {Arr2 ? <span className="count">{goods.length}</span> : ' '}
          <BsBasket3Fill className="icon-top-basket" />
        </StyledNavLink>
      </NavigateBasket>
    </>
  );
}
