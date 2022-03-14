import classNames from 'classnames';
import React, { useState } from 'react';
import s from '../Header.module.css';
import HeaderItem from './HeaderItem/HeaderItem';

function HeaderItems({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerItem = [...navItems].map((i) => (
    <HeaderItem title={i.title} submenu={i.submenu} key={i.id} />
  ));
  const onBurgerClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={classNames(s.headerBurger, {
          [s.headerBurgeractive]: isOpen,
        })}
        onClick={onBurgerClickHandler}
        onKeyDown={onBurgerClickHandler}
        aria-label="open menu"
        role="button"
        tabIndex={0}
      >
        <span />
      </div>
      <nav
        className={classNames(s.menuBody, {
          [s.menuBodyactive]: isOpen,
        })}
      >
        <ul className={s.navItems}>{headerItem}</ul>
      </nav>
    </div>
  );
}

export default HeaderItems;
