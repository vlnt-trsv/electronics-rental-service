import styles from "./Header.module.scss";
import { BurgerOpen, BurgerClose, LOGO } from "@/shared/assets";

export default function Header({ toggleAside, isMenuOpen }: any) {
  return (
    <div className={`${styles.header}`}>
      <div className={styles.header__logo}>
        <img className={styles.header__logo__img} src={LOGO} alt="T2B Logo" />
      </div>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__burger} onClick={toggleAside}>
          {isMenuOpen ? (
            <BurgerClose className={styles.header__icon} />
          ) : (
            <BurgerOpen className={styles.header__icon} />
          )}
        </div>
      </nav>
    </div>
  );
}
