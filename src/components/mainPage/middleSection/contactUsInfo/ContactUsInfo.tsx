import styles from "./ContactUsInfo.module.scss";

const ContactUsInfo = () => {
  return (
    <div className={styles.contact}>
      <span className={styles.contact__title}>Контакты</span>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__wrapper__gif}>
          <img className={styles.contact__wrapper__gif__img} src="" alt="" />
        </div>
        <div className={styles.contact__wrapper__text}>
          <span className={styles.contact__wrapper__title}>
            Мы проконсультируем и сформируем для вас коммерческое предложение
          </span>
          <span className={styles.contact__wrapper__subtitle}>
            +7 995 655-84-34
          </span>
        </div>
        <div className={styles.contact__wrapper__social}>
          <img
            className={styles.contact__wrapper__social__img}
            src=""
            alt="social img"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
