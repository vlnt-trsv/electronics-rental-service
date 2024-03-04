import CardItem from "./CardItem";
import styles from "./ProductRegistrationInfo.module.scss";

const ProductRegistrationInfo = () => {


  return (
    <div className={styles.productRegistration}>
      <div className={styles.productRegistration__head}>
        <span className={styles.productRegistration__title}>
          Проверьте, ту ли вещь вы арендуете
        </span>
        <span className={styles.productRegistration__subtitle}>
          После оформление товара, подписку надо оплатить
        </span>
      </div>

      <CardItem />
    </div>
  );
};

export default ProductRegistrationInfo;
