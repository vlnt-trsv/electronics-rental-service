const styles = {
  statusNotPaid: { color: "rgb(255, 73, 73)" },
  statusPaid: { color: "rgb(0, 255, 64)" },
  statusInRent: { color: "rgb(255, 153, 0)" },
  statusCompleted: { color: "rgb(136, 241, 255)" },
  statusCancel: { color: "rgb(108, 185, 196)" },
};

const getStatusClassName = (status: any) => {
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
