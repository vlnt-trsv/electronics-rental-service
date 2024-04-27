import { Button } from "@/components/ui/button";
import styles from "./CardDeviceItem.module.scss";

const CardDeviceItem = ({
  title,
  subtitle,
  price,
  imageUrl,
  altText,
  onClick,
}: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img className={styles.img} src={imageUrl} alt={altText} />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__head}>
          <span className={styles.card__subtitle}>{subtitle}</span>
          <span className={styles.card__title}>{title}</span>
          <span className={styles.card__price}>{price}</span>
        </div>
        <div className={styles.card__button}>
          <Button
            onClick={onClick}
            className={styles.card__button}
            variant="primary"
            size="lg"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDeviceItem;
