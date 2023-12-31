import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormikPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 85vw;
  height: 100%;
  background-color: #fafafa;
  margin: 0;
  padding: 0;
`;

export const WrapNavSign = styled.nav`
  /* position: fixed; */
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #757575;
  gap: 40px;
  width: 100%;
  height: 60px;
  /* gap: 40px; */
  margin: 0;
  padding: 8px 0;
  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    color: #212121;
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
  gap: 20px;
  margin: 0;
`;
// *******  All form **************
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
`;
// ******** Auth form **************
export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 400px;
  height: max-content;
  margin: 0;
  padding: 0;
`;
export const AuthTitle = styled.label`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #616161;
  padding: 8px;
`;
export const InputBox = styled.div`
  position: relative;
  padding: 8px 0 16px 0;
  margin: 0;
  /* margin: 8px auto 8px auto; */
`;
export const StyledField = styled(Field)`
  /* position: relative; */
  width: 300px;
  height: 24px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #616161;
  outline: #616161;
  padding: 8px;
  margin: 0;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-32px);
    font-size: 16px;
    text-align: center;
    color: #616161;
    outline: #616161;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 44%;
  left: 28px;
  /* transform: translateY(-50%); */
  transform: translateY(-44%);
  font-size: 16px;
  text-align: center;
  color: #616161;
  background-color: white;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  padding: 0;
  margin: 0;
`;
// ************ Select form ***********

export const SelectFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 400px;
  height: 112px;
  margin: 0;
`;
export const SelectTitle = styled.label`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #616161;
  padding: 8px;
`;
export const StyledSelect = styled(Field)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 316px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #616161;
  border-radius: 8px;
  border: 2px solid #616161;
  outline: #616161;
  padding: 8px;
  margin: 0;
  .option {
    font-size: 16px;
    color: #616161;
    border-radius: 8px;
    outline: #616161;
  }
  //
`;
// *********** Textarea form *************
export const AreaFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 400px;
  height: 192px;
  margin: 0;
`;
export const AreatTitle = styled.label`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #616161;
  padding: 8px;
`;
export const StyledTextarea = styled(Field)`
  width: 340px;
  height: 100px;
  font-size: 16px;
  font-weight: 500;
  color: #616161;
  border-radius: 8px;
  border: 2px solid #616161;
  outline: #616161;
  padding: 8px;
  margin: 0;
`;
// ************  Rating ********************
export const RatingFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 240px;
  height: 100px;
  padding: 0;
  margin: 0;
`;
export const RatingTitle = styled.label`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #616161;
  padding: 8px;
`;
export const StyledRating = styled(Field)`
  width: 60px;
  height: 28px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #616161;
  border-radius: 8px;
  border: 2px solid #616161;
  outline: #616161;
  padding: 0;
  margin: 0;
`;
// ************  Checkbox ********************
export const CheckboxFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 400px;
  height: 60px;
  margin: 0;
  padding: 0;
`;
export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: ctnter;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #616161;
`;
export const StyledCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  border: 2px solid #616161;
  outline: #616161;
  padding: 0;
  margin: 0;
`;
// ********** Button- submit ***************
export const BtnForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #bdbdbd;
  border-radius: 16px;
  border: 1px solid #bdbdbd;
  outline: #bdbdbd;
  width: 400px;
  height: 48px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #757575;
  }
`;
// ********** Erorr ************************

export const ErrorText = styled.div`
  display: flex;
  justify-content: centr;
  width: 300px;
  font-size: 16px;
  color: #ff1744;
  padding: 0;
  margin: 0;
`;
// ********************************
export const MyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 400px;
  height: 112px;
  margin: 0;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 20px;
  }
  .input {
    width: 300px;
    height: 24px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .label {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 8px;
  }
  .select {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 316px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .option {
    font-size: 16px;
    color: #616161;
    border-radius: 8px;
    outline: #616161;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: #bdbdbd;
    border-radius: 16px;
    border: 1px solid #bdbdbd;
    outline: #bdbdbd;
    width: 400px;
    height: 48px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #757575;
    }
  }
`;
