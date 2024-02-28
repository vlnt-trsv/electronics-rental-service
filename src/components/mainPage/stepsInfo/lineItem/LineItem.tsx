import React from "react";
import styles from "./LineItem.module.scss";

const LineItem = ({ status }) => {
  let pointClassName = styles.point;
  let lineElement = null;

  switch (status) {
    case "В процессе":
      pointClassName += ` ${styles.inProgressPoint}`;
      break;
    case "Пройдено":
      pointClassName += ` ${styles.donePoint}`;
      break;
    case "Насладиться":
      pointClassName += ` ${styles.endPoint}`;
      break;
    default:
      break;
  }

  // Рендерим линию только если статус не "Насладиться"
  if (status !== "Насладиться") {
    let lineClassName = styles.line;
    switch (status) {
      case "В процессе":
        lineClassName += ` ${styles.inProgressLine}`;
        break;
      case "Пройдено":
        lineClassName += ` ${styles.doneLine}`;
        break;
      default:
        break;
    }
    lineElement = <hr className={lineClassName} />;
  }

  return (
    <ul className={styles.ul}>
      <li className={pointClassName}></li>
      {lineElement}
    </ul>
  );
};

export default LineItem;
