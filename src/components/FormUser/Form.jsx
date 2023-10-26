import React, { useState } from 'react';
import {
  BtnFormFB,
  InputEmail,
  InputPass,
  TitleFB,
  WrapFormFB,
} from './Form.styled';

export default function Form(handleClick) {
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(event.target.elements.email.value);
  //   const user = {
  //     email: event.target.elements.email.value,
  //     password: event.target.elements.pass.value,
  //   };
  // console.log(user)
  // };
  // event.preventDefault();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <TitleFB>Form</TitleFB>
      <WrapFormFB>
        <InputEmail
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <InputPass
          type="password"
          name="pass"
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="password"
        />
        <BtnFormFB type="submit" onClick={() => handleClick(email, pass)}>
          Submit
        </BtnFormFB>
      </WrapFormFB>
    </div>
  );
}
