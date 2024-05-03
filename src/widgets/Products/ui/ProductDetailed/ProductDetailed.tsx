import styles from "./ProductDetailed.module.scss";
import { Button } from "@/shared/ui/button/button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useProducts } from "../lib/hooks/useProducts";

export default function ProductsDetailed() {
  const { product, category, handleOptionSelect, selectedOption, getImageUrl } =
    useProducts();

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__image}>
        <img
          className={styles.img}
          src={getImageUrl(product.deviceImage || "")}
          alt={product?.name || "Product image"}
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
}
