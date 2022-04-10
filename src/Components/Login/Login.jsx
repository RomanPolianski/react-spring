/* eslint-disable jsx-a11y/control-has-associated-label */
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './Login.module.css';
import InputField from '../common/InputField';
import { sendLoginData } from '../../Redux/authSlice';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const message = useSelector((state) => state.auth.messageLogin);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  if (message === 'Request failed with status code 400') {
    toast.error('Login Error!', {
      toastId: 1,
    });
  }

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, 'Max length is 15 characters')
      .required('Username is Required'),
    password: Yup.string()
      .min(4, 'Min length is 4 characters')
      .required('Password is Required'),
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
          <p className={s.h1}>Login.</p>
          <Form className={s.form}>
            <InputField label="Username" name="userName" type="text" />
            <InputField label="Password" name="password" type="password" />
            <button
              type="submit"
              disabled={!formik.isValid}
              className={s.submitButton}
            >
              Submit
            </button>
          </Form>
          <div className={s.redirContainer}>
            No account? |
            <Link to="/signUp" className={s.linkBlue}> Sign Up</Link>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;
