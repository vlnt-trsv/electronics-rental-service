import { Button } from "@/components/ui/button";
import styles from "./SubsInfo.module.scss";
import SubsCard from "./SubsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFilter,
  setSubscriptionStatus,
} from "@/redux/slices/subsSlice";

const SubsInfo = () => {
  const dispatch = useDispatch();
  const { subscriptions, subscriptionFilter, selectedFilter } = useSelector(
    (state) => state.subs
  );
  console.log("Данные карточки", subscriptions);

  const size = "lg";
  const areSubscriptionsAvailable = subscriptions.length > 0;

  //Функция для вычисления варианта кнопки
  const getButtonVariant = (status) => {
    if (!areSubscriptionsAvailable) return "default disabled";
    return selectedFilter === status ? "primary" : "";
  };

  const subscriptionId = subscriptions[0]?.id;
  const handleStatusChange = () => {
    // Вызов dispatch при нажатии на кнопку или другое событие
    dispatch(setSubscriptionStatus({ id: subscriptionId, status: "Завершено" }));
  };

  return (
    <div className={styles.subs}>
      <span className={styles.subs__title}>Подписки</span>
      <div>
        <Button variant={"outline"} size={"lg"} onClick={handleStatusChange}>
          Изменить статус
        </Button>
      </div>
      <div className={styles.subs__filter}>
        {areSubscriptionsAvailable &&
          subscriptionFilter.map((status) => (
            <Button
              key={status}
              size={size}
              variant={getButtonVariant(status)}
              onClick={() => dispatch(setSelectedFilter(status))}
            >
              {status}
            </Button>
          ))}
      </div>
      {subscriptions.length === 0 ? (
        <div className={styles.subs__noCardsWrapper}>
          <div className={styles.subs__noCardsMessage}>
            Нет доступных подписок
          </div>
        </div>
      ) : (
        <>
          <div className={styles.subs__cards}>
            {subscriptions
              .filter((subscription) =>
                selectedFilter === "Все"
                  ? true
                  : subscription.status === selectedFilter
              )
              .map((subscription) => (
                <SubsCard key={subscription.id} data={subscription} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SubsInfo;
