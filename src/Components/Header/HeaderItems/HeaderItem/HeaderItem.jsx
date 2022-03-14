import React, { useState } from 'react';
import classNames from 'classnames';
import s from '../../Header.module.css';

function HeaderItem({ title, submenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const onArrowClickHndlr = () => {
    setIsOpen(!isOpen);
  };
  const item = submenu.map((i) => {
    if (i === 'View all Projects') {
      return (
        <li>
          <a href="#section" className={s.blueLink}>
            {i}
          </a>
        </li>
      );
    }
    if (i === 'Development Tools') {
      return <li className={s.uppercaseText}>{i}</li>;
    }
    if (i === 'Spring Initializr') {
      return (
        <li>
          <a className={s.menuSublink} href="#s">
            {i}
          </a>
        </li>
      );
    }
    return (
      <li>
        <a href="#s" className={s.menuSublink}>
          {i}
        </a>
      </li>
    );
  });
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {submenu.length !== 0 ? (
        <li className={classNames({ [s.active]: isOpen })}>
          <a href="#s" className={s.hasSubmenu}>
            {title}
          </a>
          <span role="button" tabIndex={0} className={s.menuArrow} aria-label="open menu" onClick={onArrowClickHndlr} onKeyDown={onArrowClickHndlr} />
          <ul className={s.menuSublist}>{item}</ul>
        </li>
      ) : (
        <li>
          <a href="#s" className={s.menuLink}>
            {title}
          </a>
        </li>
      )}
    </>
  );
}

export default HeaderItem;
