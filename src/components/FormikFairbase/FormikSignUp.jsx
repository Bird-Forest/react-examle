import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  AuthForm,
  InputBox,
  Label,
  StyledField,
  StyledForm,
  WrapFormUp,
} from './Form.styled';
import FormError from './FormError';

const jobType = ['designer', 'development', 'product', 'other'];

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().required(),
  wouldRecommend: Yup.boolean().default(false),
  jobType: Yup.string().oneOf(jobType).required('Required'),
  date: Yup.date().default(() => new Date()),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  jobType: '',
  review: '',
  rating: '',
  wouldRecommend: false,
  date: new Date(),
};

export default function FormikSignUp({ onRegistration }) {
  const handleSubmit = (values, { resetForm }) => {
    const email = values.email;
    const password = values.password;
    onRegistration(email, password);
    console.log(values);
    resetForm();
  };
  return (
    <WrapFormUp>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <AuthForm>
            <InputBox>
              <StyledField name="name" type="text" placeholder="" />
              <Label htmlFor="name">Name*</Label>
            </InputBox>
            <FormError name="name" />
            <InputBox>
              <StyledField name="email" type="text" placeholder="" />
              <Label htmlFor="email">Email*</Label>
            </InputBox>
            <FormError name="email" />
            <InputBox>
              <StyledField name="password" type="text" placeholder="" />
              <Label htmlFor="password">Password*</Label>
            </InputBox>
            <FormError name="password" />
          </AuthForm>

          <div>
            <label htmlFor="product">Job Type</label>
            <div>
              <Field name="jobType" as="select">
                <option value="">Select a job type</option>
                {jobType.map((type, idx) => (
                  <option value={type} key={idx}>
                    {type}
                  </option>
                ))}
              </Field>
              <FormError name="product" />
            </div>
          </div>
          <div>
            <label htmlFor="review">About Me</label>
            <div>
              <Field name="review" as="textarea" placeholder="About Me" />
              <FormError name="review" />
            </div>
          </div>
          <div>
            <label htmlFor="rating">Experience</label>
            <div>
              <Field
                name="rating"
                type="number"
                min={1}
                max={10}
                placeholder="experience"
              />
              <FormError name="rating" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="wouldRecommend">
                <Field name="wouldRecommend" type="checkbox" />
                Would recommend
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </WrapFormUp>
  );
}

// https://github.com/luxplanjay/react-41/blob/04-forms/src/components/ProductReviewForm/ProductReviewForm.jsx
