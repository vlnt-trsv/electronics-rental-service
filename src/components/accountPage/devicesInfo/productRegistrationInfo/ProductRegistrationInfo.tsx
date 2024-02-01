import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import styles from "./ProductRegistrationInfo.module.scss";

const ProductRegistrationInfo = () => {

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const selectedSubscription = useSelector(
    (state) => state.subscriptionOptions.selectedSubscription
  );

  return (
    <div className={styles.productRegistration}>
      <div className={styles.productRegistration__head}>
        <span className={styles.productRegistration__title}>
          Проверьте, ту ли вещь вы арендуете
        </span>

        <span>{selectedProduct?.name}</span>
        <span>{selectedSubscription?.price}</span>
        <span>{selectedSubscription?.duration}</span>
        
        <span className={styles.productRegistration__subtitle}>
          После оформление товара, подписка будет действительна
        </span>
      </div>

      <CardItem />
    </div>
  );
};

export default ProductRegistrationInfo;
