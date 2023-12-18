import styled from 'styled-components';

export const ReaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.body};
  width: 100%;
  /* height: 100%; */
  padding: 0 0 20px 0;
  margin: 0;
`;
export const BtnReaderWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.header};
  width: 100%;
  /* height: 10vh; */
  padding: 8px;
  margin-bottom: 16px;
`;
export const BtnSun = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 50px;
  width: 80px;
  border-radius: 10px;
  margin-right: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-sun {
    height: 40px;
    width: 40px;
    fill: #ffeb3b;
  }
  .icon-moon {
    height: 36px;
    width: 36px;
    fill: #3f51b5;
  }
`;
export const BtnLeft = styled.button`
  height: 50px;
  width: 60px;
  border-radius: 10px;
  margin-right: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-arrow {
    width: 32px;
    height: 32px;
    fill: ${props => props.theme.text};
  }
`;
export const BtnRight = styled.button`
  height: 50px;
  width: 60px;
  border-radius: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-arrow {
    width: 32px;
    height: 32px;
    fill: ${props => props.theme.text};
  }
`;
export const TextReaderWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 20px;
  margin: 0 0 40px 0;
  border-radius: 10px;
  background-color: ${props => props.theme.card};
`;
export const CountReader = styled.span`
  font-size: clamp(12px, 0.477rem + 1.36vw, 24px);
  font-weight: 700;
  color: ${props => props.theme.text};
  padding: 0;
  margin: 0;
`;
// При ширине экрана 1600 высщта шрифта 80рх 1vw=20px 80/20= 4vw
export const TitleReader = styled.h2`
  text-align: center;
  font-size: clamp(20px, 0.795rem + 2.27vw, 40px);
  padding: 0;
  margin: 0 0 16px 0;
  color: ${props => props.theme.text};
`;
export const TextReader = styled.p`
  font-size: clamp(12px, 0.477rem + 1.36vw, 24px);
  color: ${props => props.theme.text};
`;
