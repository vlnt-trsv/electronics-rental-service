import styles from "./AboutUsInfo.module.scss";

const AboutUsInfo = () => {
  return (
    <div id="aboutUs" className={styles.about}>
      <span className={styles.about__title}>О нас</span>
      <div className={styles.about__wrapper}>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>10 минут</span>
          <span className={styles.about__info__subtitle}>Занимает оформление аренды</span>
        </div>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>25+</span>
          <span className={styles.about__info__subtitle}>Активных арендаторов</span>
        </div>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>4</span>
          <span className={styles.about__info__subtitle}>Категорий товаров</span>
        </div>
        <div className={styles.about__info}>
          <span className={styles.about__info__title}>Более 50</span>
          <span className={styles.about__info__subtitle}>Электроники, хватит всем</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
