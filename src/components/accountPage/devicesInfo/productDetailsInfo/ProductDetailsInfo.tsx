import { Button } from "@/components/ui/button";
import styles from "./ProductDetailtInfo.module.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedSubscriptionOption } from "@/redux/slices/subscriptionOptionSlice";

const ProductDetailsInfo = () => {
  const subscriptionOptions = useSelector(
    (state) => state.subscriptionOptions.subscriptionOptions
  );
  const selectedSubscription = useSelector(
    (state) => state.subscriptionOptions.selectedSubscription
  );
  const dispatch = useDispatch();
  const handleOptionSelect = (option) => {
    // Используйте dispatch для отправки нового значения в Redux
    dispatch(
      setSelectedSubscriptionOption({
        id: option.id,
        duration: option.duration,
        price: option.price,
      })
    );
    console.log(option);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__image}>
        <img className={styles.img} src="" alt="ps5" />
      </div>
      <div className={styles.productDetails__payments}>
        <span className={styles.productDetails__subtitle}>Приставка</span>
        <span className={styles.productDetails__title}>Playstation 5</span>
        {subscriptionOptions.map((option) => (
          <Button
            key={option.id}
            variant={selectedSubscription?.id === option.id ? "primary" : ""}
            className={styles.productDetails__button}
            onClick={() => handleOptionSelect(option)}
          >
            <span>{option.duration}</span>
            <span>{option.price} ₽</span>
          </Button>
        ))}
        <span className={styles.productDetails__description}>
          Оплата проходит в начале периода
        </span>
        <Link to="registration">
          <Button className={styles.productDetails__button}>
            Оформить подписку
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
