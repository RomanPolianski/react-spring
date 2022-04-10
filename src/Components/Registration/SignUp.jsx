/* eslint-disable jsx-a11y/control-has-associated-label */
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './SignUp.module.css';
import InputField from '../common/InputField';
import { sendSignUpData } from '../../Redux/authSlice';

function SignUp() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const message = useSelector((state) => state.auth.message);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  if (message === 'User registered successfully') {
    toast.success('User registered successfully', {
      toastId: 3,
    });
  } else if (message === 'Request failed with status code 401') {
    toast.error('Already registered', {
      toastId: 4,
    });
  } else if (message === 'Request failed with status code 400') {
    toast.error('Check passwords! Must contain 1 number and 1 letter and match!', {
      toastId: 4,
    });
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
        repeatPassword: '',
        firstName: '',
        lastName: '',
        age: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(sendSignUpData(values));
      }}
    >
      {(formik) => (
        <div className={s.container}>
          <p className={s.h1}>SignUp.</p>
          <Form className={s.form}>
            <InputField label="Username" name="userName" type="text" />
            <InputField label="Password" name="password" type="password" />
            <InputField
              label="Repeat PW"
              name="repeatPassword"
              type="password"
            />
            <InputField label="Name" name="firstName" type="text" />
            <InputField label="Surname" name="lastName" type="text" />
            <InputField label="Age" name="age" type="number" />
            <button
              type="submit"
              disabled={!formik.isValid}
              className={s.submitButton}
            >
              Submit
            </button>
          </Form>
          <div className={s.redirContainer}>
            Registered? |
            <Link to="/login" className={s.linkBlue}> Login</Link>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
