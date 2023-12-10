import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  background-color: #1a237e;
  width: 15vw;
  height: 100vh;
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
  height: 100vh;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  /* background-color: #8c9eff; */
`;

export const WrapNavigate = styled.nav`
  /* position: fixed; */
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #249fa3;
  width: 100%;
  height: 10vh;
  gap: 20px;
  margin: 0;
  padding: 0;
  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 20px 0;
    color: #0e1841;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    &.active {
      color: white;
    }
  }
`;
export const WrapRender = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
`;
export const BasketPageWrap = styled.div`
  /* width: 80vw; */
  height: 100%;
  /* background-color: #ffe082; */
`;
