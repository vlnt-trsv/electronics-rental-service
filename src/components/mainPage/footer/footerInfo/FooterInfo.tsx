import styles from "./Footer.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterInfo = () => {
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.footer__info__left}>
        <span className={styles.footer__info__text}>Two2Buddy © 2024</span>
        <span className={styles.footer__info__text}>Все права защищены.</span>
        <span className={styles.footer__info__text}>
          Политика обработки персональных данных
        </span>
      </div>
      <div className={styles.footer__info__right}>
        <div className={styles.footer__info__right__text}>
          <span className={styles.footer__info__text}>+7 995 655-84-34</span>
          <span className={styles.footer__info__text}>two-2-buddy@mail.ru</span>
        </div>
        <a
          href="https://t.me/two2buddy"
          target="_blank"
          className={styles.footer__info__social}
        >
          <FaTelegramPlane className={styles.footer__info__social__img} />
        </a>
        <a
          href="mailto:two-2-buddy@mail.ru"
          className={styles.footer__info__social}
        >
          <MdEmail className={styles.footer__info__social__img} />
        </a>
      </div>
    </div>
  );
};

export default FooterInfo;
