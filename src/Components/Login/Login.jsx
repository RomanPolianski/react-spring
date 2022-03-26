/* eslint-disable jsx-a11y/control-has-associated-label */
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import s from './Login.module.css';
import InputField from './InputField/InputField';
import { sendLoginData } from '../../Redux/authSlice';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loginErr = useSelector((state) => state.auth.loginErr);
  const errMessage = useSelector((state) => state.auth.errMessage);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'Max length is 15 characters')
      .required('Username is Required'),
    password: Yup.string()
      .min(4, 'Min length is 4 characters')
      .required('Password is Required'),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(sendLoginData(values));
      }}
    >
      {(formik) => (
        <div className={s.container}>
          <p className={s.h1}>Login.</p>
          <Form className={s.form}>
            <InputField label="Username" name="username" type="text" />
            <InputField label="Password" name="password" type="password" />
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

export default Login;
