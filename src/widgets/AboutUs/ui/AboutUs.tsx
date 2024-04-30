import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <div id="aboutUs" className={styles.about}>
      <span className={styles.about__title}>В чём особенность?</span>
      <span className={styles.about__subtitle}>Особенности то особенные</span>
      <div className={styles.about__wrapper}>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>
            Краткосрочная аренда
          </span>
          <span className={styles.about__info__subtitle}>
            Не нужно покупать за полную стоимость, чтобы ощущить новые ощущения
          </span>
        </div>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>Низкий ценник</span>
          <span className={styles.about__info__subtitle}>
            Думаете это дорого? Забудьте про это, ведь у нас приятная ценновая
            политика
          </span>
        </div>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>Быстрое оформление </span>
          <span className={styles.about__info__subtitle}>
            Всё что от вас нужно, так это ваш паспорт или другой документ
            личности
          </span>
        </div>
      </div>
    </div>
  );
}
