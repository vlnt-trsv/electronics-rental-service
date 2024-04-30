import styles from "./PaymentsCard.module.scss";

export default function Payments({ id, status, date, sum }: any) {
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
}
