import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AreaFormWrap,
  AreatTitle,
  AuthForm,
  AuthTitle,
  BtnForm,
  CheckboxFormWrap,
  CheckboxLabel,
  InputBox,
  Label,
  RatingFormWrap,
  RatingTitle,
  SelectFormWrap,
  SelectTitle,
  StyledCheckbox,
  StyledField,
  StyledForm,
  StyledRating,
  StyledSelect,
  StyledTextarea,
  WrapFormUp,
} from './Form.styled';
import FormError from './FormError';
// import MySelect from './MySelect';

const jobType = [
  'Design UI/UX',
  'Fullstack',
  'Project Manager',
  'Data Analyst',
  'Sysadmin',
];

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().required(),
  agreement: Yup.boolean().required().default(false),
  jobType: Yup.string().required('Please select a job type').oneOf(jobType),
  date: Yup.date().default(() => new Date()),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  jobType: '',
  review: '',
  rating: '',
  agreement: false,
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
            <AuthTitle>Autorization</AuthTitle>
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
          <SelectFormWrap>
            <SelectTitle htmlFor="jobType">Job Type</SelectTitle>
            <StyledSelect name="jobType" as="select">
              <option value="" className="option">
                Select a job type
              </option>
              {jobType.map((type, idx) => (
                <option value={type} key={idx} className="option">
                  {type}
                </option>
              ))}
            </StyledSelect>
            <FormError name="jobType" />
          </SelectFormWrap>
          <AreaFormWrap>
            <AreatTitle htmlFor="review">About Me</AreatTitle>
            <StyledTextarea name="review" as="textarea" placeholder="" />
            <FormError name="review" />
          </AreaFormWrap>
          <RatingFormWrap>
            <RatingTitle htmlFor="rating">Experience</RatingTitle>
            <StyledRating name="rating" type="number" min={0} max={10} />
            <FormError name="rating" />
          </RatingFormWrap>
          <CheckboxFormWrap>
            <StyledCheckbox name="agreement" type="checkbox" />
            <CheckboxLabel htmlFor="agreement">
              I accept the terms and conditions
            </CheckboxLabel>
            <FormError name="agreement" />
          </CheckboxFormWrap>
          <BtnForm type="submit">Submit</BtnForm>
        </StyledForm>
      </Formik>
    </WrapFormUp>
  );
}

// https://github.com/luxplanjay/react-41/blob/04-forms/src/components/ProductReviewForm/ProductReviewForm.jsx
