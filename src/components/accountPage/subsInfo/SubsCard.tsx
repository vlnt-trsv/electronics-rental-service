import { Button } from "@/components/ui/button";
import styles from "./SubsCard.module.scss";

const SubsCard = () => {
  return (
    <div className={styles.subsCard}>
      <div className={styles.subsCard__head}>
        <span className={`${styles.subsCard__status} ${styles.titleHead}`}>
          Статус:{" "}
          <span className={styles.subsCard__status__text}>Не оплачен</span>
        </span>
        <span className={`${styles.subsCard__order} ${styles.titleHead}`}>
          Дата оформления заказа:{" "}
          <span className={styles.subsCard__order__date}>14.09.2023</span>
        </span>
        <span className={`${styles.subsCard__id} ${styles.titleHead}`}>
          №123456
        </span>
      </div>
      <div className={styles.subsCard__main}>
        <div className={styles.subsCard__image}>
          <img className={styles.img} src="" alt="img" />
        </div>
        <div className={styles.subsCard__info}>
          <div className={styles.subsCard__info__item}>
            <span className={styles.subsCard__subtitle}>Приставка</span>
            <span className={styles.subsCard__title}>Playstation 5</span>
          </div>
          <div className={styles.subsCard__info__item}>
            <span className={styles.subsCard__subtitle}>Доставка</span>
            <span className={styles.subsCard__title}>
              Дата достака: 15.09.2023
            </span>
          </div>
          <div>
            <span>Подписка начнётся с момента получения девайса</span>
          </div>
        </div>
        <div className={styles.subsCard__payment}>
          <span className={styles.subsCard__subtitle}>Сумма</span>
          <span className={styles.subsCard__text}>
            Подписка на 14 дней{" "}
            <span className={styles.subsCard__price}>3 999 ₽</span>
          </span>
          <span className={styles.subsCard__text}>
            Доставка (опционально){" "}
            <span className={styles.subsCard__price}>399 ₽</span>
          </span>
          <span className={styles.subsCard__text}>
            К оплате <span className={styles.subsCard__price}>4 398 ₽</span>
          </span>
          <Button variant="primary" size="lg">
            Оплатить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubsCard;
