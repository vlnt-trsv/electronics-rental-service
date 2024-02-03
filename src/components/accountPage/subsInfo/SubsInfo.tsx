import { Button } from "@/components/ui/button";
import styles from "./SubsInfo.module.scss";
import SubsCard from "./SubsCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "@/redux/slices/subsSlice";

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

  return (
    <div className={styles.subs}>
      <span className={styles.subs__title}>Подписки</span>
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
          {subscriptions
            .filter((subscription) =>
              selectedFilter === "Все"
                ? true
                : subscription.status === selectedFilter
            )
            .map((subscription) => (
              <div key={subscription.id} className={styles.subs__card}>
                <SubsCard data={subscription} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default SubsInfo;
