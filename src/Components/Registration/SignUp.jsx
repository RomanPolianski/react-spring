/* eslint-disable jsx-a11y/control-has-associated-label */
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import s from './SignUp.module.css';
import InputField from '../common/InputField';
import { sendLoginData } from '../../Redux/authSlice';

function SignUp() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loginErr = useSelector((state) => state.auth.loginErr);
  const errMessage = useSelector((state) => state.auth.errMessage);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const validate = Yup.object({
    userName: Yup.string().required('Username is Required'),
    password: Yup.string().required('Password is Required'),
    repeatPassword: Yup.string().required('Repeat Password is Required'),
    firstName: Yup.string().required('Name is Required'),
    lastName: Yup.string().required('Surname is Required'),
    age: Yup.string().required('Age is Required'),
  });

  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(sendLoginData(values));
      }}
    >
      {(formik) => (
        <div className={s.container}>
          <p className={s.h1}>SignUp.</p>
          <Form className={s.form}>
            <InputField label="Username" name="userName" type="text" />
            <InputField label="Password" name="password" type="password" />
            <InputField
              label="Repeat Password"
              name="repeatPassword"
              type="password"
            />
            <InputField label="Name" name="firstName" type="text" />
            <InputField label="Surname" name="lastName" type="text" />
            <InputField label="Age" name="age" type="number" />
            {loginErr ? <div className={s.errorLogin}>{errMessage}</div> : null}
            <button
              type="submit"
              disabled={!formik.isValid}
              className={s.submitButton}
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
