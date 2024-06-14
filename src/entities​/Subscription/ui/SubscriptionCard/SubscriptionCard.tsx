import styles from "./SubscriptionCard.module.scss";
import {
  getStatusClassName,
  getShortenId,
  getFormatedDate,
  getImageUrl,
} from "@/shared/lib/utils";
import { ISubscriptionData } from "../../ISubcription";
import { renderSubscriptionDetails, renderButtons } from "../../lib/utils";
import Text from "@/widgets/Aside/ui/Text";

interface SubscriptionCardProps {
  data: ISubscriptionData;
}

export default function SubscriptionCard({ data }: SubscriptionCardProps) {
  const calculateTotalAmount = (deliveryCost: number, price: number) =>
    deliveryCost + price;

  return (
    <div className={styles.subsCard}>
      <div className={styles.subsCard__head}>
        <Text>
          Статус:{" "}
          <Text style={getStatusClassName(data?.status)}>
            {data?.status || "STATUS"}
          </Text>
        </Text>
        <Text>
          Дата оформления заказа: {getFormatedDate(data?.rentalDate || "")}
        </Text>
        <Text>№{getShortenId(data?._id || "")}</Text>
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
            <Text
              flex={true}
              justify="space-between"
              style={{
                opacity: "0.5",
              }}
            >
              {data?.category?.name || "CATEGORY NAME"}:
              <Text>{data?.device?.name || "PRODUCT NAME"}</Text>
            </Text>
            <hr />
            {renderSubscriptionDetails(
              data?.status,
              data?.subscriptionOptions,
              getFormatedDate(data?.rentalDate || ""),
              getFormatedDate(data?.startDate || ""),
              getFormatedDate(data?.endDate || "")
            )}
            {data?.deliveryMethod === "Доставка" && (
              <Text flex={true} justify="space-between">
                Доставка (опционально)
                <Text color="#ff6b6b" weight={700}>
                  {data?.deliveryCost} ₽
                </Text>
              </Text>
            )}
            {data?.deliveryMethod === "Самовывоз" &&
              data?.status === "Оплачено" && (
                <Text>Заберите девайс в пункте выдачи</Text>
              )}
            <hr />
            <Text flex={true} justify="space-between">
              К оплате
              <Text color="#ff6b6b" weight={700}>
                {calculateTotalAmount(
                  data?.deliveryCost,
                  data?.subscriptionOptions?.price
                )}{" "}
                ₽
              </Text>
            </Text>
            <Text style={{ opacity: ".5" }}>
              Подписка начнётся с момента получения девайса
            </Text>
          </div>
        </div>
      </div>
      {renderButtons(data?.status, data?._id)}
    </div>
  );
}
