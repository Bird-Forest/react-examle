import { styled } from 'styled-components';

export const ProductWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #8c9eff;
  width: 200px;
  height: 270px;
  padding: 0;
  margin: 0;
`;
export const ItemImg = styled.img`
  display: block;
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding: 0;
  margin-bottom: 40px;
`;
export const ItemDepart = styled.p`
  font-size: 12px;
  color: #1a237e;
  padding: 0;
  margin: 0;
`;
export const ItemProduct = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #3f51b5;
  padding: 0;
  margin: 0;
`;
export const ItemMaterial = styled.p`
  font-size: 12px;
  color: #1a237e;
  padding: 0;
  margin: 0;
`;
export const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ff1744;
  padding: 0;
  margin: 0;
`;
export const ItemaCity = styled.p`
  font-size: 12px;
  color: #1a237e;
  padding: 0;
  margin: 0;
`;
export const ItemCountry = styled.p`
  font-size: 12px;
  color: #1a237e;
  padding: 0;
  margin: 0;
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 0;
  margin: 0;
`;

export const BtnFavorite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #5c6bc0;
  outline: none;
  border: 1px solid #5c6bc0;
  border-bottom-left-radius: 5px;
  width: 100px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:hover,
  :focus {
    color: #1a237e;
  }
`;

export const BtnBasket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #5c6bc0;
  outline: none;
  border: 1px solid #5c6bc0;
  border-bottom-right-radius: 5px;
  width: 100px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  &:hover,
  :focus {
    color: #1a237e;
  }
`;
