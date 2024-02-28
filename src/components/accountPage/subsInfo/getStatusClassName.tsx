import styles from "./SubsCard.module.scss";

const getStatusClassName = (status) => {
  switch (status) {
    case "Не оплачено":
      return styles.statusNotPaid; // класс для "Не оплачено"
    case "Оплачено":
      return styles.statusPaid; // класс для "Оплачено"
    case "В аренде":
      return styles.statusInRent; // класс для "Оплачено"
    case "Завершено":
      return styles.statusCompleted; // класс для "Оплачено"
    case "Отменено":
      return styles.statusCancel; // класс для "Оплачено"
  }
};

export default getStatusClassName;
