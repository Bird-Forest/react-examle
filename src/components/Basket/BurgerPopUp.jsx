import React from 'react';
import {
  BurgDesc,
  BurgImgPU,
  BurgIngr,
  BurgIngrTitle,
  BurgName,
  BurgPrice,
  BurgVeg,
  BurgersWrapPU,
  IngrImg,
  IngrName,
} from './Burger.styled';

export default function BurgerPopUp({ item }) {
  return (
    <div>
      <BurgersWrapPU id={item.id}>
        <BurgDesc>{item.desc}</BurgDesc>
        <BurgImgPU
          src={item.images[0].sm}
          srcset={item.images[1].lg}
          alt={item.desc}
        />
        <ul>
          <BurgIngrTitle>ingredients</BurgIngrTitle>
          {item.ingredients.map(el => {
            return (
              <BurgIngr id={el.id}>
                <IngrImg src={el.img} alt={el.name} />
                <IngrName>{el.name}</IngrName>
              </BurgIngr>
            );
          })}
        </ul>
        <BurgName>{item.name}</BurgName>
        <BurgPrice>Price {item.price}</BurgPrice>
        {item.veg === false ? (
          <BurgVeg>Vegan NO</BurgVeg>
        ) : (
          <BurgVeg>Vegan YES</BurgVeg>
        )}
      </BurgersWrapPU>
    </div>
  );
}
