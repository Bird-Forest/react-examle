import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* margin-left: auto;
  margin-right: auto; */
  /* @media screen and (min-width: 900px) {
    width: 900px;
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  } */
`;

export const WrapLeft = styled.header`
  position: fixed;
  /* top: 0;
  left: 0; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #0e1841;
  width: 200px;
  height: 900px;
  padding: 20px;
`;

export const WrapLink = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 320px;
  padding-left: 60px; */
  gap: 20px;
  margin-left: 0;
  margin-right: auto;

  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 32px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &.active {
      color: #249fa3;
    }
  }
`;
export const WrapRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 900px;
  height: 900px;
  background-color: aqua;
`;
