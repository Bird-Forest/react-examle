import styled from 'styled-components';
// *************** Filters ************************
export const FilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #5c6bc0;
  width: 100%;
  gap: 10px;
  padding: 8px;
  margin: 0;
`;
export const FilterForm = styled.form`
  display: inline-block;
  padding: 0;
  margin: 0;
  /* background-color: #5c6bc0; */
`;
export const SelectForm = styled.select`
  display: flex;
  width: 132px;
  height: 40px;
  /* border-radius: 8px; */
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #5c6bc0;
  border-color: #5c6bc0;
  text-align: center;
  outline: #5c6bc0;
  padding: 0;
  cursor: pointer;
`;
export const OptionForm = styled.option`
  font-size: 16px;
  font-weight: 500;
  /* color: #1a237e; */
`;
export const RangeWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 60px;
  padding: 0;
  margin: 0;
`;
export const LabelRange = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 0;
  margin: 0;
`;
export const InputRange = styled.input`
  width: 200px;
  height: 60px;
  padding: 0;
  margin: 0;
`;
export const SpanRange = styled.span`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 0;
  margin: 0;
`;
export const BtnClear = styled.button`
  width: 60px;
  height: 40px;
  background-color: #5c6bc0;
  outline: #5c6bc0;
  border-color: #5c6bc0;
  border: none;
  font-size: 16px;
  font-weight: 700;
  /* border-radius: 8px; */
  color: white;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
// ********** Products ********************************
export const ProductWrap = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  /* height: max-content; */
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  background-color: #e8eaf6;
  padding: 10px;
  margin: 0 auto;
`;
export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  /* border: 2px solid #5c6bc0; */
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
  outline: none;
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
