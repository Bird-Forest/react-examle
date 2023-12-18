import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorText } from './Form.styled';

export default function FormError({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
}
