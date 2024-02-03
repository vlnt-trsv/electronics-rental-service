import { Button } from "@/components/ui/button";
import styles from "./SubsCard.module.scss";
import { useDispatch } from "react-redux";
import { setSubscriptionStatus } from "@/redux/slices/subsSlice";

const SubsCard = ({ data }) => {
  const dispatch = useDispatch();
  const subscriptionId = data?.id;
  dispatch(setSubscriptionStatus({ id: subscriptionId, status: "Не оплачено" }));

  return (
    <div className={styles.subsCard}>
      <div className={styles.subsCard__head}>
        <span className={`${styles.subsCard__titleHead}`}>
          Статус: {data?.status}
        </span>
        <span className={`${styles.subsCard__titleHead}`}>
          Дата оформления заказа: 14.09.2023
        </span>
        <span className={`${styles.subsCard__titleHead}`}>№123456</span>
      </div>
      <div className={styles.subsCard__main}>
        <div className={styles.subsCard__info}>
          <div className={styles.subsCard__image}>
            <img className={styles.img} src="" alt="img" />
          </div>
          <div className={styles.subsCard__info__item}>
            <span className={styles.subsCard__subtitle}>
              {data?.categories?.title}{" "}
              <span className={styles.subsCard__title}>
                {data?.product?.title}
              </span>
            </span>
            <span className={styles.subsCard__title}>
              Дата достака: 15.09.2023
            </span>
            <span className={styles.subsCard__text}>
              Подписка на {data?.subscriptionOption?.duration}{" "}
              <span className={styles.subsCard__price}>
                {data?.subscriptionOption?.price} ₽
              </span>
            </span>
            {data?.deliveryMethod === "Доставка" ? (
              <span className={styles.subsCard__text}>
                Доставка (опционально){" "}
                <span className={styles.subsCard__price}>
                  {data?.deliveryMethod === "Доставка" ? "240 ₽" : "null"}
                </span>
              </span>
            ) : (
              ""
            )}
            <span className={styles.subsCard__text}>
              К оплате{" "}
              <span className={styles.subsCard__price}>
                {data?.totalPrice} ₽
              </span>
            </span>
            <span style={{ opacity: "0.5" }}>
              Подписка начнётся с момента получения девайса
            </span>
          </div>
        </div>
        <Button variant="primary" size="lg">
          Оплатить
        </Button>
      </div>
    </div>
  );
};

export default SubsCard;
