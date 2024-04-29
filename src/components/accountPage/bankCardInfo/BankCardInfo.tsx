import { Button } from "@/shared/ui/button/button";
import styles from "./BankCardInfo.module.scss";

const BankCardInfo = () => {
  return (
    <div className={styles.bankCard}>
      <span className={styles.bankCard__title}>Банковские карты</span>
      <div className={styles.bankCard__extra}>
        <span className={styles.bankCard__subtitle}>
          Указывай правильные данные карты
        </span>
        <span className={styles.bankCard__description}>
          При добавление карты, убедитесь, что карта действующая
        </span>
      </div>
      <div className={styles.bankCard__button}>
        <Button variant="primary" size="lg" className="">
          Добавить карту
        </Button>
        <Button variant="outline" size="lg">
          Удалить карту
        </Button>
      </div>
      <i style={{ color: "red" }}>!!! ТАБЛИЦА !!!</i>
    </div>
  );
};

export default BankCardInfo;
