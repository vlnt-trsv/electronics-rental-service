import { Button } from "@/components/ui/button";
import styles from "./SubsInfo.module.scss";
import SubsCard from "./SubsCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "@/redux/slices/subsSlice";
import { useGetRentalQuery } from "@/redux/slices/api/api";
import Cookies from "js-cookie";

const SubsInfo = () => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state: any) => state.subs);
  const userId = JSON.parse(Cookies.get("connect.user"));

  const { data: rental, isError, isLoading } = useGetRentalQuery(userId._id);
  console.log("RENTAL", rental?.rentals);

  const size = "lg";
  const areSubscriptionsAvailable = rental?.rentals?.length > 0;

  // Функция для вычисления варианта кнопки
  const getButtonVariant = (status: any) => {
    if (!areSubscriptionsAvailable) return "default disabled";
    return selectedFilter === status ? "primary" : "";
  };

  // Получаем уникальные статусы из аренд
  const statuses = Array.from(
    new Set(rental?.rentals?.map((rental: any) => rental.status))
  );

  return (
    <div className={styles.subs}>
      <span className={styles.subs__title}>Подписки</span>
      <div className={styles.subs__filter}>
        <Button
          size={size}
          variant={getButtonVariant("Все")}
          onClick={() => dispatch(setSelectedFilter("Все"))}
        >
          Все
        </Button>
        {statuses.map((status: any) => (
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
      {rental?.rentals?.length === 0 ? (
        <div className={styles.subs__noCardsWrapper}>
          <div className={styles.subs__noCardsMessage}>
            Нет доступных подписок
          </div>
        </div>
      ) : (
        <>
          <div className={styles.subs__cards}>
            {isLoading ? (
              <p>Loading subs...</p>
            ) : isError ? (
              <p>Error loading subs</p>
            ) : (
              rental?.rentals
                .filter((subscription: any) =>
                  selectedFilter === "Все"
                    ? true
                    : subscription.status === selectedFilter
                )
                ?.map((subscription: any) => (
                  <SubsCard key={subscription._id} data={subscription} />
                ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SubsInfo;
