import React from 'react';
import {
  BtnBasket,
  BtnFavorite,
  ItemCountry,
  ItemDepart,
  ItemImg,
  ItemMaterial,
  ItemPrice,
  ItemProduct,
  ItemWrap,
  WrapBtn,
  WrapInfo,
} from './Product.styled';

export default function ProductItem({ item }) {
  return (
    <ItemWrap id={item.id}>
      <ItemImg src={item.picture} alt={item.product} />
      <WrapInfo>
        <ItemDepart>{item.department}</ItemDepart>
        <ItemProduct>{item.name}</ItemProduct>
        <ItemMaterial>{item.material}</ItemMaterial>
        <ItemPrice>{item.price}</ItemPrice>
        <ItemCountry>{item.country}</ItemCountry>
      </WrapInfo>
      <WrapBtn>
        <BtnFavorite type="button">favorite</BtnFavorite>
        <BtnBasket type="button">basket</BtnBasket>
      </WrapBtn>
    </ItemWrap>
  );
}

// function filterArrayByMultipleValues(array, filters) {
//   return array.filter(item => {
//     return Object.entries(filters).every(([key, value]) => {
//       return item[key] === value;
//     });
//   });
// }

//   {
//     // "picture": "https://loremflickr.com/640/480/animals",
//     // "product": "Mouse",
//     // "price": "936.00",
//     // "department": "Industrial",
//     // "material": "Plastic",
//     // "city": "Mannstead",
//     // "country": "San Marino",
//     // "company": "DuBuque - Kutch",
//     // "id": "1"
//   },

// const item = {
//     "createdAt": "2023-11-25T23:58:05.841Z",
//     "picture": "https://loremflickr.com/640/480/fashion",
//     "product": "Shirt",
//     "price": "838.00",
//     "depart": "Tools",
//     "adjective": "Awesome",
//     "descript": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
//     "material": "Plastic",
//     "name": "Sleek Cotton Ball",
//     "id": "1"
// };
