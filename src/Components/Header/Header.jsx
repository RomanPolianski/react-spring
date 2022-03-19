import React from 'react';
import { useSelector } from 'react-redux';
import s from './Header.module.css';
import HeaderItems from './HeaderItems/HeaderItems';
import Logo from './Logo/Logo';

function Header() {
  const navItems = useSelector((state) => state.renderItems.navItems);
  return (
    <header className={s.nav}>
      <div className={s.navInnerContainer}>
        <Logo />
        <HeaderItems navItems={navItems} />
      </div>
    </header>
  );
}

export default Header;
