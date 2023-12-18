import styled from 'styled-components';
// import clock from '../img/clock1.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  /* height: 100%; */
  margin: 0 auto;
  padding: 0;
`;
export const WrapLeft = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 15vw;
  height: 100vmax;
  background-color: #1a237e;
  margin: 0;
  padding: 0 16px;
  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #304ffe;
    }
  }
`;
export const WrapRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 85vw;
  height: 100vmax;
  /* overflow-y: scroll; */
  margin: 0;
  padding: 0;
  /* background-color: #8c9eff; */
`;
export const Input = styled.input`
  position: relative;
  display: inline-block;
  padding: 70px 40px;
  background: #fff;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
    color: #000;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;
