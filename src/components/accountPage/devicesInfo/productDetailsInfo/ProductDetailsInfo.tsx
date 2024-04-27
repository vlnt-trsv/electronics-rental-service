import { Button } from "@/components/ui/button";
import styles from "./ProductDetailtInfo.module.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const ProductDetailsInfo = () => {
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(localStorage.getItem("selectedSubscriptionOption"))
  );
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  const category = JSON.parse(localStorage.getItem("selectedCategory"));

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option); // Обновление состояния при выборе опции
    localStorage.setItem(
      "selectedSubscriptionOption",
      JSON.stringify({ ...option })
    );
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__image}>
        <img
          className={styles.img}
          src={getImageUrl(product.deviceImage)}
          alt="ps5"
        />
      </div>
      <div className={styles.productDetails__payments}>
        <span className={styles.productDetails__subtitle}>
          {category.name || "null"}
        </span>
        <span className={styles.productDetails__title}>
          {product.name || "null"}
        </span>
        {product.subscriptionOptions?.map((option: any) => (
          <Button
            key={option._id}
            variant={selectedOption?._id === option?._id ? "primary" : ""}
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
        {selectedOption?._id ? (
          <Link to="order">
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
