import { Button } from "@/components/ui/button";
import styles from "./ProductDetailtInfo.module.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedSubscriptionOption } from "@/redux/slices/subscriptionOptionSlice";

const ProductDetailsInfo = () => {
  const subscriptionOptions = useSelector(
    (state: any) =>
      state.products.selectedProduct?.subscriptionOptions
  );
  const selectedSubscription = useSelector(
    (state: any) => state.subscriptionOptions.selectedSubscription
  );

  const selectedCategory = useSelector(
    (state: any) => state.categories.selectedCategory?.name
  );
  const selectedProducts = useSelector(
    (state: any) => state.products.selectedProduct?.name
  );
  const prouductImage = useSelector(
    (state: any) => state.products.selectedProduct?.deviceImage
  );

  const dispatch = useDispatch();
  const handleOptionSelect = (option: any) => {
    dispatch(
      setSelectedSubscriptionOption({
        id: option._id,
        duration: option.duration,
        price: option.price,
      })
    );
    console.log(option);
  };

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__image}>
        <img
          className={styles.img}
          src={getImageUrl(prouductImage)}
          alt="ps5"
        />
      </div>
      <div className={styles.productDetails__payments}>
        <span className={styles.productDetails__subtitle}>
          {selectedCategory || "null"}
        </span>
        <span className={styles.productDetails__title}>
          {selectedProducts || "null"}
        </span>
        {subscriptionOptions?.map((option: any) => (
          <Button
            key={option._id}
            variant={selectedSubscription?.id === option?._id ? "primary" : ""}
            className={styles.productDetails__button}
            onClick={() => handleOptionSelect(option)}
          >
            <span>{option.duration} дней</span>
            <span>{option.price} ₽</span>
          </Button>
        ))}
        <span className={styles.productDetails__description}>
          Оплата проходит в начале периода
        </span>
        {selectedSubscription ? (
          <Link to="registration">
            <Button className={styles.productDetails__button}>
              Оформить подписку
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => toast.warn("Сначала выберите подписку!")}
            className={styles.productDetails__button}
          >
            Оформить подписку
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
