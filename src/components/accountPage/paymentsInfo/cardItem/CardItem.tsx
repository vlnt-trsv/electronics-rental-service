import styles from "./CardItem.module.scss";

const CardItem = ({ id, status, date, sum, ...props }) => {
  return (
    <div className={styles.card}>
      <span className={styles.card__title}>№{id}</span>
      <hr className={styles.card__hr} />
      <span className={styles.card__title}>
        Статус:
        <span className={styles.card__title__text}>{status}</span>
      </span>
      <span className={styles.card__title}>
        Дата оформления:
        <span className={styles.card__title__text}>{date}</span>
      </span>
      <span className={styles.card__title}>
        Сумма:
        <span className={styles.card__title__text}>{sum} ₽</span>
      </span>
    </div>
  );
};

export default CardItem;
