import s from "../Header.module.css";
import classNames from "classnames";
import { useState } from "react";
import HeaderItem from "./HeaderItem/HeaderItem";

const HeaderItems = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerItem = [...navItems].map((i) => {
    return <HeaderItem title={i.title} submenu={i.submenu} />;
  });
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
};

export default HeaderItems;
