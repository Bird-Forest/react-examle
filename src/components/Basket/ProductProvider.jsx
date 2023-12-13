import React from 'react';
import { createContext, useState } from 'react';

export const FavoritesContext = createContext(null);

export const BasketContext = createContext(null);

export default function ProductProvider({ children }) {
  const [likes, setLikes] = useState([]);
  const [goods, setGoods] = useState([]);
  console.log('Provider likes', likes);
  console.log('Provider  goods', goods);

  return (
    <BasketContext.Provider value={{ goods, setGoods }}>
      <FavoritesContext.Provider value={{ likes, setLikes }}>
        {children}
      </FavoritesContext.Provider>
    </BasketContext.Provider>
  );
}
