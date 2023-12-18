import styled from 'styled-components';

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
