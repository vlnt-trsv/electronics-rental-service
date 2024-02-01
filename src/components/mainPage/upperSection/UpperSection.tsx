import styles from "./UpperSection.module.scss";
// import headphone from "../../../assets/imgs/Headphone-1.svg";
import macbook from "../../../assets/imgs/macbook.png";

const UpperSection = () => {
  return (
    <div className={styles.upper}>
      <div className={`${styles.upper__wrapper} container`}>
        <div className={styles.upper__gif}>
          <img className={styles.upper__gif__img} src={macbook} alt="gif" />
        </div>
        <div className={styles.upper__cta}>
          <span className={styles.upper__cta__title}>
            Rent it. <br /> Use it. <br /> Repeat it.
          </span>
          <span className={styles.upper__cta__subtitle}>
            Хотите быстрее оформить аренду? Входите в свой аккаунт, вас ждёт
            большое количество товаров
          </span>
          <form className={styles.upper__cta__button}>
            <button className={styles.upper__cta__button__rent}>
              Арендовать
            </button>
            <button className={styles.upper__cta__button__trial} disabled>
              Пробный период
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
