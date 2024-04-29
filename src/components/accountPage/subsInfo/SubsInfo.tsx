import { Button } from "@/components/ui/button";
import styles from "./SubsInfo.module.scss";
import SubsCard from "./SubsCard";
import { useGetRentalQuery } from "@/shared/api/api";
import Cookies from "js-cookie";
import Notice from "@/components/ui/notice/Notice";
import { useEffect, useState } from "react";

const SubsInfo = () => {
  const [selectedFilter, setSelectedFilter] = useState("Все");
  const [areSubscriptionsAvailable, setAreSubscriptionsAvailable] =
    useState(false);
  const [statuses, setStatuses] = useState([]);

  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const { data: rental, isError, isLoading } = useGetRentalQuery(userId._id, {
    pollingInterval: 5000,
    skipPollingIfUnfocused: true,
  });
  // console.log("RENTAL", rental?.rentals);

  useEffect(() => {
    if (rental?.rentals?.length > 0) {
      setAreSubscriptionsAvailable(true);
      const uniqueStatuses: any = Array.from(
        new Set(rental.rentals.map((rental: { status: any }) => rental.status))
      );
      setStatuses(uniqueStatuses);
    } else {
      setAreSubscriptionsAvailable(false);
    }
  }, [rental]);

  // Функция для вычисления варианта кнопки
  const getButtonVariant = (status: any) => {
    if (!areSubscriptionsAvailable) return "default disabled";
    return selectedFilter === status ? "primary" : "";
  };

  const handleFilterChange = (status: any) => {
    setSelectedFilter(status);
    localStorage.setItem("selectedFilter", JSON.stringify(status));
  };

  // Проверяем, есть ли доступные подписки
  const hasSubscriptions =
    areSubscriptionsAvailable && rental.rentals.length > 0;

  return (
    <div className={styles.subs}>
      <span className={styles.subs__title}>Подписки</span>
      {/* Отображаем компонент Notice, если данных нет */}
      {!hasSubscriptions ? (
        <Notice
          data={rental?.rentals || []}
          isLoading={isLoading}
          isError={isError}
          message="Нет доступных подписок"
        />
      ) : (
        <>
          {/* Отображаем кнопки фильтрации, если есть доступные подписки */}
          <div className={styles.subs__filter}>
            <Button
              size={"lg"}
              varicant={getButtonVariant("Все")}
              onClick={() => handleFilterChange("Все")}
            >
              Все
            </Button>
            {statuses.map((status: any) => (
              <Button
                key={status}
                size={"lg"}
                variant={getButtonVariant(status)}
                onClick={() => handleFilterChange(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          {/* Отображаем карточки подписок, если есть доступные подписки */}
          <div className={styles.subs__cards}>
            {rental?.rentals
              .filter((subscription: any) =>
                selectedFilter === "Все"
                  ? true
                  : subscription.status === selectedFilter
              )
              .map((subscription: any) => (
                <SubsCard key={subscription._id} data={subscription} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SubsInfo;
