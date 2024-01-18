import CardItem from "./cardItem/CardItem";
import styles from "./CategoriesInfo.module.scss";

const CategoriesInfo = () => {
  return (
    <div className={styles.categories}>
      <span className={styles.categories__title}>
        Категории аренды электроники
      </span>
      <div className={styles.categories__card}>
        <CardItem
          img
          title="Приставка"
          subtitle="Стало скучно? Не парься, возьми в аренду приставку!"
          description="Более 5 вариантов"
        />
        <CardItem
          img
          title="Приставка"
          subtitle="Стало скучно? Не парься, возьми в аренду приставку!"
          description="Более 5 вариантов"
        />
        <CardItem
          img
          title="Приставка"
          subtitle="Стало скучно? Не парься, возьми в аренду приставку!"
          description="Более 5 вариантов"
        />
        <CardItem
          img
          title="Приставка"
          subtitle="Стало скучно? Не парься, возьми в аренду приставку!"
          description="Более 5 вариантов"
        />
      </div>
    </div>
  );
};

export default CategoriesInfo;
