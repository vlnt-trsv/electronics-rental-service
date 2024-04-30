// import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { IoNotifications } from "react-icons/io5";

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={styles.header__logo}>
        <span className={styles.header__logo__span}>T2B</span>
      </div>
      <div className={styles.header__nav}>
        {/* <Link className={styles.header__account} to={"/accountPage"}>
          acc
        </Link> */}
        <div className={styles.header__notify}>
          <IoNotifications className={styles.header__icon} />
        </div>
      </div>
    </div>
  );
}
