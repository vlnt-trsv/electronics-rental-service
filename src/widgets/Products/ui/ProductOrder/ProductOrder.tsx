import styles from "./ProductOrder.module.scss";
import { ProductOrderCard } from "@/entities​";

export default function ProductsOrder() {
  return (
    <div className={styles.productRegistration}>
      <div className={styles.productRegistration__extra}>
        <span className={styles.productRegistration__title}>
          Проверьте, ту ли вещь вы арендуете
        </span>
        <span className={styles.productRegistration__subtitle}>
          После оформление товара, подписку надо оплатить
        </span>
      </div>
      <ProductOrderCard />
    </div>
  );
}
