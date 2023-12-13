import React from 'react';
import Burger from './Burger';
import { nanoid } from '@reduxjs/toolkit';
import { BurgersWrap } from './Burger.styled';
import data from './data.json';

const burgers = data;
// console.log(burgers);

export default function ShowcaseBurgers() {
  // const [burgers, setBurgers] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const burgersList = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getBurgersHub();
  //       console.log(data);
  //       setBurgers(data);
  //     } catch (error) {
  //       error(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   burgersList();
  // }, []);

  const Arr = Array.isArray(burgers) && burgers.length > 0;
  return (
    <BurgersWrap>
      {Arr &&
        burgers.map(item => {
          return <Burger key={nanoid()} item={item} />;
        })}
    </BurgersWrap>
  );
}
