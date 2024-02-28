import React from "react";
import styles from "./CardItem.module.scss";

const CardItem = ({ img, title, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={img}
        alt="Card Image"
      />
      <div className={styles.card__content}>
        <span className={styles.card__title}>{title}</span>
        <span className={styles.card__subtitle}>{subtitle}</span>
        <span className={styles.card__description}>{description}</span>
      </div>
    </div>
  );
};

export default CardItem;
