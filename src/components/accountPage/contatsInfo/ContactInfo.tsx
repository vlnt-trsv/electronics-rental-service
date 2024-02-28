import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__title}>Контакты</div>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__link}>
          <span className={styles.contact__subtitle}>Связаться</span>
          <span className={styles.contact__decription}>+7 (924) 883-12-43</span>
          <span className={styles.contact__decription}>two2buddy@mail.ru</span>
        </div>
        <div className={styles.contact__address}>
          <span className={styles.contact__subtitle}>Адрес</span>
          <span className={styles.contact__street}>
            ул. Красный Проспект, д. 81
          </span>
        </div>
        <div className={styles.contact__social}>
          <span className={styles.contact__subtitle}>Социальные сети</span>
          <a
            className={styles.contact__decription}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            Telegram
          </a>
          <a
            className={styles.contact__decription}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            Whats'app
          </a>
          <a
            className={styles.contact__decription}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div className={styles.contact__info}>
          <span className={styles.contact__subtitle}>Иная информация</span>
          <div className={styles.contact__legal}>
            <span className={styles.contact__decription}>Наименоваение:</span>
            <span className={styles.contact__decription}>
              ООО “Рент-девайс”
            </span>
          </div>
          <div className={styles.contact__inn}>
            <span className={styles.contact__decription}>ИНН:</span>
            <span className={styles.contact__decription}>534895439</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
