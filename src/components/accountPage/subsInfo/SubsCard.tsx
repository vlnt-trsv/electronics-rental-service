import styles from "./SubsCard.module.scss";
import renderButtons from "./renderButtons";
import getStatusClassName from "./getStatusClassName";

const SubsCard = ({ data }) => {
  return (
    <div className={styles.subsCard}>
      <div className={styles.subsCard__head}>
        <span className={`${styles.subsCard__titleHead}`}>
          Статус:{" "}
          <span className={`${getStatusClassName(data?.status)}`}>
            {data?.status}
          </span>
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
              {data?.categories?.title}
              {":"}
              <span className={styles.subsCard__title}>
                {data?.product?.title}
              </span>
            </span>
            <hr className="hr" />
            <span className={styles.subsCard__text}>
              Подписка на {data?.subscriptionOption?.duration}{" "}
              <span className={styles.subsCard__price}>
                {data?.subscriptionOption?.price} ₽
              </span>
            </span>
            {data?.status === "Не оплачено" ? (
              <span className={styles.subsCard__text}>
                Оплатить товар до{":"}
                <span className={styles.subsCard__title}>12.12.2024</span>
              </span>
            ) : data?.status === "Завершено" ? (
              <span className={styles.subsCard__text}>
                Вернуть товар до{":"}
                <span className={styles.subsCard__title}>12.12.2024</span>
              </span>
            ) : data?.status === "В аренде" ? (
              <span className={styles.subsCard__text}>
                Подписка действует до
                <span className={styles.subsCard__title}>12.12.2024</span>
              </span>
            ) : data?.deliveryMethod === "Доставка" ? (
              <span className={styles.subsCard__text}>
                Доставка (опционально)
                <span className={styles.subsCard__price}>240 ₽</span>
              </span>
            ) : (
              <span className={styles.subsCard__text}>
                Забрать товар до{":"}
                <span className={styles.subsCard__title}>
                  {data?.deliveryMethod === "Самовывоз" ? "12.12.2024" : "null"}
                </span>
              </span>
            )}
            <hr className="hr" />
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
        {renderButtons(data?.status)}
      </div>
    </div>
  );
};

export default SubsCard;
