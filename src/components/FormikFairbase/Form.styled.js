import { Form, Field } from 'formik';
import styled from 'styled-components';
// export const TitleFB = styled.h3`
//   font-size: 24px;
//   font-weight: 500;
// `;
export const FormikPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 85vw;
  height: 100vh;
  /* overflow-y: scroll; */
  margin: 0;
  padding: 0;
  /* background-color: #8c9eff; */
`;

export const WrapNavSign = styled.nav`
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

export const WrapFormUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  gap: 20px;
  margin: 0 0 0 200px;
`;

export const InputName = styled.input`
  font-size: 16px;
  outline: 2px solid red;
`;
export const InputEmail = styled.input`
  font-size: 16px;
  outline: 2px solid red;
`;
export const InputPass = styled.input`
  font-size: 16px;
  outline: 2px solid red;
`;
export const BtnFormFB = styled.button`
  background-color: white;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  /* gap: 20px; */
  margin: 0;
  padding: 24px;
`;
export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const InputBox = styled.div`
  position: relative;
  /* width: 300px;
  height: 46px; */
  padding: 0;
  margin: 16px auto 4px auto;
`;
export const StyledField = styled(Field)`
  /* position: relative; */
  width: 316px;
  height: 24px;
  text-align: left;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #2979ff;
  outline: #2979ff;
  padding: 8px;
  margin: 0;

  /* &::placeholder {
    color: #2979ff;
    background-color: white;
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }
  &:focus::placeholder {
    transform: translateY(-20px);
  } */

  /* &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-40px);
    font-size: 16px;
    text-align: center;
    color: #2979ff;
  } */
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-32px);
    font-size: 16px;
    text-align: center;
    color: #2979ff;
    outline: #2979ff;
  }
  /* &:not(:placeholder-shown) + label {
    top: 50%;
    left: 28px;
    transform: translateY(-16px);
  } */
  /* &:not(:focus) + label {
    top: 50%;
    left: 28px;
    transform: translateY(-16px);
  } */
`;
export const Label = styled.label`
  position: absolute;
  top: 44%;
  left: 28px;
  /* transform: translateY(-50%); */
  transform: translateY(-44%);
  font-size: 16px;
  text-align: center;
  color: #2979ff;
  background-color: white;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  padding: 0;
  margin: 0;
`;

// export const StyledErrorMessage = styled(ErrorMessage)`
//   /* Ваши стили */
// `;
export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  padding: 0;
  font-size: 16px;
  color: #ff1744;
  margin: 0;
`;
