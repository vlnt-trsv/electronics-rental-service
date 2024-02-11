import { Button } from "@/components/ui/button";
import styles from "./SubsCard.module.scss";
import { useDispatch } from "react-redux";
import { removeSubscription } from "@/redux/slices/subsSlice";
import { BsQrCodeScan } from "react-icons/bs";
import Popup from "@/components/ui/popup/popup";

const renderButtons = (status) => {
  const dispatch = useDispatch();
  const handleRemoveSubscription = (subscriptionId) => {
    // Вызов действия Redux для удаления подписки
    dispatch(removeSubscription({ id: subscriptionId }));
  };

  switch (status) {
    case "Не оплачено":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={styles.subsCard__button}
            variant="primary"
            size="lg"
          >
            Оплатить подписку
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="danger"
            size="lg"
          >
            Отменить подписку
          </Button>
        </div>
      );
    case "В аренде":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={styles.subsCard__button}
            variant="primary"
            size="lg"
          >
            Продлить подписку
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="danger"
            size="lg"
          >
            Отменить подписку
          </Button>
        </div>
      );
    case "Завершено":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={styles.subsCard__button}
            variant="primary"
            size="lg"
          >
            Повторить подписку
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="danger"
            size="lg"
          >
            Удалить
          </Button>
        </div>
      );
    case "Оплачено":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={`${styles.subsCard__button} ${styles.subsCard__button__qr}`}
            variant="primary"
            size="lg"
          >
            <BsQrCodeScan />
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="primary"
            size="lg"
          >
            Продлить подписку
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="danger"
            size="lg"
          >
            Отменить подписку
          </Button>
        </div>
      );
    default:
      return null;
  }
};

export default renderButtons;
