import styles from "./CategoriesCard.module.scss";
import { Categories } from "../../ICategories";

export default function CategoriesCard({
  title,
  subtitle,
  description,
  imageUrl,
  altText,
}: Categories) {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subtitle}</div>
        <div className={styles.card__description}>{description}</div>
      </div>
      <div className={styles.card__wrapper}>
        <img className={styles.card__img} src={imageUrl} alt={altText} />
      </div>
    </div>
  );
}
