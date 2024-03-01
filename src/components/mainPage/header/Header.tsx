import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const Header = () => {
  return (
    <div className={`${styles.header} container2`}>
      <div className={styles.header__logo}>
        <span className={styles.header__logo__text}>T2B</span>
      </div>
      <div className={styles.header__nav}>
        <a className={styles.header__nav__link} href="#aboutUs">
          О нас
        </a>
        <a className={styles.header__nav__link} href="#contact">
          Контакты
        </a>
        <a className={styles.header__nav__link} href="#faq">
          Вопрос & Ответы
        </a>
      </div>
      {Cookies.get("connect.user") ? (
        <Link to={"/accountPage"}>
          {" "}
          <Button size={"s48"} variant={"primary"}>
            Личный аккаунт
          </Button>
        </Link>
      ) : (
        <Link to={"/enterPage"}>
          {" "}
          <Button size={"s48"} variant={"primary"}>
            Войти
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
