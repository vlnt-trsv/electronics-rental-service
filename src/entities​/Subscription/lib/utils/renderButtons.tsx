import { Button } from "@/shared/ui/button/button";
import styles from "../../ui/SubscriptionCard/SubscriptionCard.module.scss";
// import { useDispatch } from "react-redux";
// import { BsQrCodeScan } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Popup from "@/components/ui/popup/popup";
import {
  useCancelRentalMutation,
  useDeleteRentalMutation,
  usePayRentalMutation,
} from "@/shared/api/api";

// const styles = {
//   subsCard__buttons: {
//     display: "flex",
//     gap: "8px",
//   },
//   subsCard__button: {
//     borderRadius: "4px",
//     width: "100%",
//   },
// };

export const renderButtons = (status: any, rentalId: any) => {
  // const dispatch = useDispatch();

  const [payRental] = usePayRentalMutation();
  const [cancelRental] = useCancelRentalMutation();
  const [deleteRental] = useDeleteRentalMutation();

  const handlePaymentClick = async () => {
    try {
      const paymentDetails = {
        cardNumber: "1234567812345678",
        expiryDate: "12/24",
        cvv: "123",
        nameOnCard: "Valentin Tarasov",
      };
      const rentalData = { rentalId, paymentDetails };
      await toast.promise(payRental(rentalData).unwrap(), {
        pending: "Оплата аренды...",
        success: "Аренда успешно оплачена!",
        error: "Ошибка при оплате аренды. Попробуйте еще раз.",
      });
    } catch (error) {
      console.error("Ошибка при оплате аренды:", error);
    }
  };

  const handleCancelClick = async () => {
    try {
      await toast.promise(cancelRental(rentalId).unwrap(), {
        pending: "Отмена аренды...",
        success: "Аренда успешно отменена!",
        error: "Ошибка при отмене аренды. Попробуйте еще раз.",
      });
    } catch (error) {
      console.error("Ошибка при отмене аренды:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await toast.promise(deleteRental(rentalId).unwrap(), {
        pending: "Удаление аренды...",
        success: "Аренда успешно удалена!",
        error: "Ошибка при удалении аренды. Попробуйте еще раз.",
      });
    } catch (error) {
      console.error("Ошибка при удалении аренды:", error);
    }
  };

  switch (status) {
    case "Не оплачено":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={styles.subsCard__button}
            variant="primary"
            size="lg"
            onClick={handlePaymentClick}
          >
            Оплатить подписку
          </Button>
          <Button
            className={styles.subsCard__button}
            variant="danger"
            size="lg"
            onClick={handleCancelClick}
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
            onClick={handleCancelClick}
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
            onClick={handleDeleteClick}
          >
            Удалить
          </Button>
        </div>
      );
    case "Оплачено":
      return (
        <div className={styles.subsCard__buttons}>
          {/* <Button
            className={`${styles.subsCard__button} ${styles.subsCard__button__qr}`}
            variant="primary"
            size="lg"
          >
            <BsQrCodeScan />
          </Button> */}
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
            onClick={handleCancelClick}
          >
            Отменить подписку
          </Button>
        </div>
      );
    case "Отменено":
      return (
        <div className={styles.subsCard__buttons}>
          <Button
            className={styles.subsCard__button}
            variant="default"
            size="lg"
            onClick={handleDeleteClick}
          >
            Удалить
          </Button>
        </div>
      );
    default:
      return null;
  }
};
