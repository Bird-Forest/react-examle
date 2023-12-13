import React, { useContext, useState } from 'react';
import {
  BtBasket,
  BtHeart,
  BurgImages,
  BurgName,
  BurgPrice,
  BurgWrap,
  IconWrap,
} from './Burger.styled';
import { BsBasket3, BsBasket3Fill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { BasketContext, FavoritesContext } from './ProductProvider';

export default function Burger({ item }) {
  const [mode, setMode] = useState(false);
  const [order, setOrder] = useState(false);
  const { likes, setLikes } = useContext(FavoritesContext);
  const { goods, setGoods } = useContext(BasketContext);

  const handleLikes = evt => {
    // console.log(evt.currentTarget.name);
    const idBurger = Number(evt.currentTarget.id);
    const nameBurger = evt.currentTarget.name;
    const hasNameBurger = likes.some(like => like.name === nameBurger);

    // setMode(!mode);
    if (!hasNameBurger) {
      setMode(true);
      setLikes([...likes, item]);
      console.log('ON LIKE', likes);
    } else {
      alert(`You want to delete burger ${nameBurger} in favorites ?`);
      setMode(false);
      let newlikes = likes.filter(like => like.id !== idBurger);
      setLikes(newlikes);
      // console.log('ON DISLIKE');
    }
  };

  const handleGoods = evt => {
    const idBurger = Number(evt.currentTarget.id);
    const nameBurger = evt.currentTarget.name;
    const hasNameBurger = goods.some(item => item.name === nameBurger);

    if (!hasNameBurger) {
      setOrder(true);
      item.count = 1;
      setGoods([...goods, item]);
      // console.log('ON GOODS', goods);
    } else {
      alert(`You want to delete burger ${nameBurger} in basket ?`);
      setOrder(false);
      let newGoods = goods.filter(item => item.id !== idBurger);
      setGoods(newGoods);
      // console.log('ON DISGOOD', newGoods);
    }
  };

  return (
    <BurgWrap id={item.id}>
      <IconWrap>
        <BtHeart
          type="button"
          onClick={handleLikes}
          name={item.name}
          id={item.id}
          mode={item.mode}
        >
          {mode ? (
            <BsHeartFill className="icon-heart-fill" />
          ) : (
            <BsHeart className="icon-heart" />
          )}
        </BtHeart>
        <BtBasket
          type="button"
          onClick={handleGoods}
          name={item.name}
          id={item.id}
          mode={item.mode}
        >
          {order ? (
            <BsBasket3Fill className="icon-basket-fill" />
          ) : (
            <BsBasket3 className="icon-basket" />
          )}
        </BtBasket>
      </IconWrap>
      <BurgImages src={item.images[0].sm} alt={item.name} />
      <BurgName>{item.name}</BurgName>
      <BurgPrice>Price {item.price}</BurgPrice>
    </BurgWrap>
  );
}
