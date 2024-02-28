import styles from "./CardItem.module.scss";
import { FaCircleCheck } from "react-icons/fa6";

const CardItem = ({ title, status, description }: any) => {
  let statusText = "";
  let statusClassName = "";
  let titleClassName = "";
  let descriptionClassName = "";
  let cardClassName = styles.card;

  switch (status) {
    case "В процессе":
      statusText = "В процессе";
      statusClassName = styles.card__check__inProgress;
      titleClassName = styles.card__title__inProgress;
      cardClassName = `${styles.card} ${styles.card__inProgress}`;
      break;
    case "Пройдено":
      statusText = "Пройдено";
      statusClassName = styles.card__check__done;
      titleClassName = styles.card__title__done;
      break;
    case "Насладиться":
      statusText = "Насладиться";
      statusClassName = styles.card__check__end;
      titleClassName = styles.card__title__end;
      descriptionClassName = styles.card__description__end;
      cardClassName = `${styles.card} ${styles.card__end}`;
      break;
    default:
      statusText = "Неизвестно";
  }

  return (
    <div className={cardClassName}>
      <div className={styles.card__head}>
        <span className={`${styles.card__title} ${titleClassName}`}>
          {title}
        </span>
        <span className={`${styles.card__check} ${statusClassName}`}>
          {statusText}
          {(status === "Пройдено" || status === "Насладиться") && (
            <FaCircleCheck className={styles.checkIcon} />
          )}
        </span>
      </div>
      <span className={`${styles.card__description} ${descriptionClassName}`}>
        {description}
      </span>
    </div>
  );
};

export default CardItem;
