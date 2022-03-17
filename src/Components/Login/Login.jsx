/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './Login.module.css';

function Login() {
  return (
    <div className={s.container}>
      <p className={s.h1}>Login.</p>
      <form className={s.form}>
        <input type="text" className={s.formInput} />
        <input type="password" className={s.formInput} />
        <button type="submit" className={s.submitButton} name="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
