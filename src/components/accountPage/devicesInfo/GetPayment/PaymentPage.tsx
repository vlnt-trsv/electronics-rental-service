import { useState } from "react";
import styles from "./PaymentPage.module.scss";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    // Здесь вы можете отправить фейковый запрос на оплату с использованием Тинькофф Sandbox.
    // Имитируйте успешное выполнение платежа или обработку ошибки.

    try {
      setIsLoading(true);

      // Ваш фейковый запрос на оплату

      // Если платеж успешен, выполните необходимые действия

    } catch (error) {
      // Обработка ошибки при фейковой оплате
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.paymentPage__container}>
      <div className={styles.paymentPage__wrapper}>
        <div className={styles.paymentPage__content}>
          <div className={styles.paymentPage__title}>
            Оплата товара
          </div>
          <div className={styles.paymentPage__form}>
            <input
              type="text"
              placeholder="Номер карты"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Срок действия"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button
            className={styles.paymentPage__payButton}
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? "Оплата..." : "Оплатить"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
