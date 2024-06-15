import { Link } from "react-router-dom";
import styles from "./HeaderMain.module.scss";
import { Button } from "@/shared/ui/button/button";
import Cookies from "js-cookie";

export default function HeaderMain() {
  const width = window.innerWidth;

  return (
    <div className={styles.header}>
      {width < 430 && (
        <nav className={styles.header__nav}>
          <a className={styles.header__nav__link} href="#aboutUs">
            О нас
          </a>
          <a className={styles.header__nav__link} href="#contact">
            Контакты
          </a>
          <a className={styles.header__nav__link} href="#faq">
            Вопрос & Ответы
          </a>
        </nav>
      )}
      {Cookies.get("connect.user") ? (
        <Link to={"/accountPage"}>
          <Button size={"s48"} variant={"primary"}>
            Личный аккаунт
          </Button>
        </Link>
      ) : (
        <Link to={"/enterPage"} style={{ width: "100%" }}>
          <Button style={{ width: "100%" }} size={"s48"} variant={"primary"}>
            Войти
          </Button>
        </Link>
      )}
    </div>
  );
}
