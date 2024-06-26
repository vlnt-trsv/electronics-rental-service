import styles from "./Subscription.module.scss";
import Notice from "@/shared/ui/notice/Notice";
import { Button } from "@/shared/ui/button/button";
import { SubscriptionCard } from "@/entities​";
import { useSubscriptions } from "../lib";
import { ISubscription } from "@/entities​/Subscription/ISubcription";

export default function Subscription() {
  const {
    rentalData,
    statuses,
    selectedFilter,
    isError,
    isLoading,
    hasSubscriptions,
    getButtonVariant,
    handleFilterChange,
  } = useSubscriptions();

  return (
    <div className={styles.subs}>
      {!hasSubscriptions ? (
        <Notice
          data={rentalData?.rentals || []}
          isLoading={isLoading}
          isFetching={false}
          isError={isError}
          message="Нет доступных подписок"
        />
      ) : (
        <>
          {/* Отображаем кнопки фильтрации, если есть доступные подписки */}
          <div className={styles.subs__filter}>
            <Button
              size={"lg"}
              variant={getButtonVariant("Все") || null}
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
            {rentalData?.rentals
              .filter((subscription: ISubscription) =>
                selectedFilter === "Все"
                  ? true
                  : subscription.status === selectedFilter
              )
              .map((subscription: ISubscription) => (
                <SubscriptionCard key={subscription._id} data={subscription} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
