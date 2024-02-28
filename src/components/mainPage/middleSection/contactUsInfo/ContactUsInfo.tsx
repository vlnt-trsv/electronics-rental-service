import styles from "./ContactUsInfo.module.scss";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUsInfo = () => {
  return (
    <div id="contact"  className={styles.contact}>
      <span className={styles.contact__title}>
        Вы можете написать нам в мессенджерах
      </span>
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
        <a href="https://t.me/two2buddy" target="_blank" className={styles.contact__wrapper__social}>
          <FaTelegramPlane className={styles.contact__wrapper__svg} />
        </a>
      </div>
    </div>
  );
};

export default ContactUsInfo;
