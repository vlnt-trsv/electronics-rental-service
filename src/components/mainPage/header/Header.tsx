import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img className={styles.header__logo__img} src="" alt="logo" />
      </div>
      <div className={styles.header__nav}>
        <a  className={styles.header__nav__link} href="main">Главная</a>
        <a className={styles.header__nav__link} href="aboutUs">О нас</a>
        <a className={styles.header__nav__link} href="contact">Контакты</a>
        <a className={styles.header__nav__link} href="faq">Вопрос & Ответы</a>
      </div>
      <NavLink to={'/enterPage'} className={styles.header__button}>Арендовать</NavLink>
    </div>
  );
};

export default Header;
