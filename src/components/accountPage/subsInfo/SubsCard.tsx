import styles from "./SubsCard.module.scss";
import renderButtons from "./renderButtons";
import getStatusClassName from "./getStatusClassName";
import Timer from "./Timer";

// Функция для форматирования даты
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Функция для усечения _id от 18 до 24 символов
const shortenId = (id: any) => {
  return id.substring(18, 24).toUpperCase();
};

const SubsCard = ({ data }: any) => {
  // Форматирование даты оформления заказа
  const formattedRentalDate = formatDate(data?.rentalDate);
  const formattedStartDate = formatDate(data?.startDate);
  const formattedEndDate = formatDate(data?.endDate);

  // Усечение _id до 6 символов
  const shortenedId = shortenId(data?._id || "");

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  const totalAmount = data?.deliveryCost + data?.subscriptionOptions?.price;

  return (
    <div className={styles.subsCard}>
      <div className={styles.subsCard__head}>
        <span className={`${styles.subsCard__titleHead}`}>
          Статус:{" "}
          <span className={`${getStatusClassName(data?.status)}`}>
            {data?.status || "STATUS"}
          </span>
        </span>
        <span className={`${styles.subsCard__titleHead}`}>
          Дата оформления заказа: {formattedRentalDate || "DATE"}
        </span>
        <span className={`${styles.subsCard__titleHead}`}>
          №{shortenedId || "NUMBER"}
        </span>
      </div>
      <div className={styles.subsCard__main}>
        <div className={styles.subsCard__info}>
          <div className={styles.subsCard__image}>
            <img
              className={styles.img}
              src={getImageUrl(data?.device?.deviceImage)}
              alt="img"
            />
          </div>
          <div className={styles.subsCard__info__item}>
            <span className={styles.subsCard__subtitle}>
              {data?.category?.name || "CATEGORY NAME"}
              {":"}
              <span className={styles.subsCard__title}>
                {data?.device?.name || "PRODUCT NAME"}
              </span>
            </span>
            <hr className="hr" />
            <span className={styles.subsCard__text}>
              Подписка на {data?.subscriptionOptions?.duration || "DURATION"}{" "}
              дней
              <span className={styles.subsCard__price}>
                {data?.subscriptionOptions?.price || "PRICE"} ₽
              </span>
            </span>
            {data?.status === "Не оплачено" ? (
              <span className={styles.subsCard__text}>
                Оплатить товар до{":"}
                <span className={styles.subsCard__title}>
                  {formattedRentalDate}
                </span>
              </span>
            ) : data?.status === "Завершено" ? (
              <span className={styles.subsCard__text}>
                Вернуть товар до{":"}
                <span className={styles.subsCard__title}>-</span>
              </span>
            ) : data?.status === "В аренде" ? (
              <span className={styles.subsCard__text}>
                Подписка действует{":"}
                <span className={styles.subsCard__title}>
                  <Timer endDate={data?.endDate} />
                </span>
              </span>
            ) : data?.status === "Отменено" ? (
              <span className={styles.subsCard__text}>
                Подписка не действительна
              </span>
            ) : null
            // <span className={styles.subsCard__text}>
            //   Забрать товар до{":"}
            //   <span className={styles.subsCard__title}>
            //     {data?.deliveryMethod === "Самовывоз" &&
            //     data?.status === "Оплачено"
            //       ? "12.12.2024"
            //       : "null"}
            //   </span>
            // </span>
            }

            {data?.deliveryMethod === "Доставка" ? (
              <span className={styles.subsCard__text}>
                Доставка (опционально)
                <span className={styles.subsCard__price}>240 ₽</span>
              </span>
            ) : null}

            <hr className="hr" />
            <span className={styles.subsCard__text}>
              К оплате{" "}
              <span className={styles.subsCard__price}>
                {totalAmount || "TOTAL PRICE"} ₽
              </span>
            </span>
            <span style={{ opacity: "0.5" }}>
              Подписка начнётся с момента получения девайса
            </span>
          </div>
        </div>
        {renderButtons(data?.status, data?._id)}
      </div>
    </div>
  );
};

export default SubsCard;
