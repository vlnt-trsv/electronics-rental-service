import styles from "./CardItem.module.scss";

interface CardItemProps {
  title: string;
  subtitle: string;
  img?: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  img,
  subtitle,
  isActive,
  onClick,
  onMouseEnter,
}) => {
  return (
    <div className={styles.card__wrapper}>
      <div
        className={`${styles.card} ${isActive ? styles.active : ""}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <div className={styles.card__content}>
          <span className={styles.card__title}>{title}</span>
          <span className={styles.card__subtitle}>{subtitle}</span>
        </div>
        {isActive && img && (
          <img src={img} alt="Card" className={styles.card__image} />
        )}
      </div>
    </div>
  );
};

export default CardItem;
