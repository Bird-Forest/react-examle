import styled from 'styled-components';

export const WrapFairbase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
`;
export const WrapLinkSign = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 320px;
  height: 40px;
  gap: 40px;

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
      color: #249fa3;
    }
    &:hover,
    :focus {
      color: #249fa3;
    }
  }
`;
