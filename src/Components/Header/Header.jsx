import s from "./Header.module.css";
import HeaderItems from "./HeaderItems/HeaderItems";
import Logo from "./Logo/Logo";

const Header = ({ navItems }) => {
  
  return (
    <header className={s.nav}>
      <div className={s.navInnerContainer}>
        <Logo />
        <HeaderItems navItems={navItems}/>
      </div>
    </header>
  );
};

export default Header;
