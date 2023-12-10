import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ****************** Header ******************
export const NavigateBasket = styled.div`
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  background-color: #754a08;
  padding: 0;
  margin: 0;
  .icon-top-like {
    width: 34px;
    height: 34px;
    fill: #64dd17;
    padding: 0;
    margin: 10px 40px 6px 0;
  }
  .icon-top-basket {
    width: 36px;
    height: 36px;
    fill: #64dd17;
    padding: 0;
    margin: 8px 40px 8px 0;
  }
`;
export const StyledNavLinkBurgers = styled(NavLink)`
  font-size: 28px;
  font-weight: 700;
  color: #64dd17;
  margin: 8px 60px 8px 0;
`;
// ******************** Burger ***************************
export const BurgersWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffac33;
  width: 100%;
  gap: 10px;
  padding: 8px;
  margin: 0;
`;
export const BurgWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 200px;
  border-radius: 8px;
  background-color: white;
  padding: 10px;
`;
export const IconWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 140px;
  height: 32px;
`;
export const BtMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-menu {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`;
export const BtHeart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-heart {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
  .icon-heart-fill {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`;
export const BtBasket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-basket {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
  .icon-basket-fill {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`;
export const BurgImages = styled.img`
  display: block;
  width: 140px;
  border-radius: 8px;
  object-fit: cover;
`;
export const BurgName = styled.h3`
  display: flex;
  font-size: 16px;
  text-align: center;
  color: #754a08;
  /* color: #ab5600; */
  padding: 0;
  margin: 0 0 4px 0;
`;
export const BurgPrice = styled.h3`
  font-size: 12px;
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0 0 4px 0;
`;
export const BurgVeg = styled.h3`
  font-size: 12px;
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
// ***********   FavoritesList **************************************
export const FavoritesWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffd180;
  gap: 8px;
  padding: 16px 0;
  margin: 0 auto;
`;
export const BurgerCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 596px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 0;
  margin: 0;
`;
export const BurgNameCard = styled.h2`
  position: relative;
  top: 12px;
  left: 16px;
  display: inline-block;
  width: 580px;
  height: 28px;
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
export const BurgImgWrap = styled.div`
  position: relative;
  top: 16px;
  left: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 140px;
  padding: 0;
  margin: 0;
`;
export const BurgImgCard = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  object-fit: content;
  padding: 0;
  margin: 0;
`;
export const BurgDescrCard = styled.p`
  display: inline-block;
  font-size: 12px;
  padding: 0;
  margin: 0;
  color: #754a08;
  .title-desc {
    font-size: 16px;
    font-weight: 700;
    color: #754a08;
  }
`;
export const BurgIngrTitle = styled.h3`
  position: relative;
  top: 16px;
  left: 16px;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  color: #754a08;
  width: 580px;
  height: 32px;
  padding: 0;
  margin: 0;
`;
export const BurgIngrWrap = styled.ul`
  position: relative;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 596px;
  height: auto;
  padding: 0;
  margin: 0;
`;
export const BurgIngr = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 120px;
  border: 2px solid #ff9800;
  border-radius: 5px;
  padding: 4px;
  margin: 0;
`;
export const BurgIngrImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
`;
export const BurgIngrName = styled.p`
  display: inline-block;
  font-size: 12px;
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
export const BurgInfoWrap = styled.div`
  position: relative;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 580px;
  height: 76px;
  margin: 0;
  padding: 0;
`;
export const BurgVegCard = styled.h3`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0 24px;
`;
export const BurgPriceCard = styled.h3`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0 200px 0 0;
`;
export const BtBasketFavor = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0 40px 0 0;
  padding: 0;
  .icon-basket-favor {
    width: 32px;
    height: 32px;
    fill: #ff9800;
  }
`;
export const BtDeleteFavor = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0 24px 0 0;
  padding: 0;
  .icon-delete-favor {
    width: 32px;
    height: 32px;
    fill: #ff9800;
  }
`;
// ****************  BasketList  ***********************
// "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:1-4-product-tile-desktop"
