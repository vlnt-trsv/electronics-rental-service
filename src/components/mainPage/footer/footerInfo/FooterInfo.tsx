import styles from "./Footer.module.scss";

const FooterInfo = () => {
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.footer__info__left}>
        <span className={styles.footer__info__text}>Red Studio © 2023</span>
        <span className={styles.footer__info__text}>Все права защищены.</span>
        <span className={styles.footer__info__text}>
          Политика обработки персональных данных
        </span>
      </div>
      <div className={styles.footer__info__right}>
        <div className={styles.footer__info__right__text}>
          <span className={styles.footer__info__text}>+7 995 655-84-34</span>
          <span className={styles.footer__info__text}>info@redstudio.su</span>
        </div>
        <div className={styles.footer__info__social}>
          <img
            className={styles.footer__info__social__img}
            src=""
            alt="social"
          />
          <img
            className={styles.footer__info__social__img}
            src=""
            alt="social"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
