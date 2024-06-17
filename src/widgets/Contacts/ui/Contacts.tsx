import styles from "./Contacts.module.scss";
import { TelegramIconCirle, WhatsappIcon, InstagramIcon } from "@/shared/assets";

export default function Contacts() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__link}>
          <span className={styles.contact__subtitle}>Связаться</span>
          <span className={styles.contact__description}>
            +7 (924) 883-12-43
          </span>
          <span className={styles.contact__description}>two-2-buddy@mail.ru</span>
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
            className={styles.contact__description__social}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            <TelegramIconCirle /> Telegram
          </a>
          <a
            className={styles.contact__description__social}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            <WhatsappIcon /> Whats'app
          </a>
          <a
            className={styles.contact__description__social}
            href="https://t.me/two2buddy"
            target="_blank"
          >
            <InstagramIcon /> Instagram
          </a>
        </div>
        <div className={styles.contact__info}>
          <span className={styles.contact__subtitle}>Иная информация</span>
          <div className={styles.contact__legal}>
            <span className={styles.contact__description}>Наименоваение:</span>
            <span className={styles.contact__description}>
              ООО “Рент-девайс”
            </span>
          </div>
          <div className={styles.contact__inn}>
            <span className={styles.contact__description}>ИНН:</span>
            <span className={styles.contact__description}>534895439</span>
          </div>
        </div>
      </div>
    </div>
  );
}
