import styles from "./GetPayment.module.scss";

const GetPayment = () => {
  return (
    <div className={styles.getPayment__container}>
      <div className={styles.getPayment__wrapper}>
        <div className={styles.getPayment__content}>
          <div className={styles.getPayment__title}>
            Оплата товара
          </div>
          {/* <div className={styles.getPayment__subtitle}>
            Ваша подписка активирована
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GetPayment;
