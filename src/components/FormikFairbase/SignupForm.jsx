import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyStyled } from './Form.styled';
import MyInput from './MyInput';
import MySelect from './MySelect';
import MyCheckbox from './MyCheckbox';
import { nanoid } from '@reduxjs/toolkit';

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
  // password: Yup.string().required(),
  // review: Yup.string().required(),
  // rating: Yup.number().required(),
  agreement: Yup.boolean().required().default(false),
  jobType: Yup.string().oneOf(jobType).required('Please select a job type'),
  date: Yup.date().default(() => new Date()),
});

const initialValues = {
  name: '',
  email: '',
  // password: '',
  jobType: '',
  // review: '',
  // rating: '',
  agreement: false,
  date: new Date(),
};

export default function SignupForm({ onRegistration }) {
  // const handleSubmit = (values, { resetForm }) => {
  //   const email = values.email;
  //   const password = values.password;
  //   console.log(email);
  //   console.log(password);
  //   onRegistration(email, password);
  //   console.log(values);
  //   resetForm();
  // };
  return (
    <MyStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(initialValues);

            setSubmitting(true);
            resetForm();
          }, 400);
        }}
      >
        {props => (
          <Form>
            <MyInput label="Name" name="name" type="text" />
            <MyInput label="Email" name="email" type="email" />
            <MySelect label="Job Type" name="jobType">
              <option key={nanoid()} value="" className="option">
                Select a job type
              </option>
              <option key={nanoid()} value="Design UI/UX" className="option">
                Design UI/UX
              </option>
              <option key={nanoid()} value="Fullstack" className="option">
                Fullstack
              </option>
              <option key={nanoid()} value="Project Manager" className="option">
                Project Manager
              </option>
              <option key={nanoid()} value="Data Analyst" className="option">
                Data Analyst
              </option>
              <option key={nanoid()} value="'Sysadmin'" className="option">
                'Sysadmin'
              </option>
            </MySelect>
            <MyCheckbox label="Agreement" name="agreement" type="checkbox">
              I accept the terms and conditions
            </MyCheckbox>
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MyStyled>
  );
}
