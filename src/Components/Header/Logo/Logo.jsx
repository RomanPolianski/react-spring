import React from 'react';
import s from '../Header.module.css';

function Logo() {
  return (
    <img
      className={s.springLogo}
      src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
      alt="Spring"
    />
  );
}

export default Logo;
