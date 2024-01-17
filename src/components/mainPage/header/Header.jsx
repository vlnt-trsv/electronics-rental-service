import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img className={styles.header__logo__img} src="" alt="logo" />
      </div>
      <div className={styles.header__nav}>
        <a className={styles.header__nav__link} href="">Главная</a>
        <a className={styles.header__nav__link} href="">О нас</a>
        <a className={styles.header__nav__link} href="">Контакты</a>
        <a className={styles.header__nav__link} href="">Вопрос & Ответы</a>
      </div>
      <button className={styles.header__button}>Войти</button>
    </div>
  );
};

export default Header;
