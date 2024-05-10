import styles from "./ProductDetailed.module.scss";
import { Button } from "@/shared/ui/button/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useProducts } from "../lib/hooks/useProducts";
import { v4 as uuidv4 } from "uuid";

export default function ProductsDetailed() {
  const { product, category, handleOptionSelect, selectedOption, getImageUrl } =
    useProducts();

  const navigate = useNavigate();
  const handleOrder = () => {
    if (selectedOption?._id) {
      const uniqueOrderId = uuidv4();
      navigate(`order/${uniqueOrderId}`, { replace: true });
    } else {
      toast.warn("Сначала выберите подписку!");
    }
  };

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
        {/* {selectedOption?._id ? ( */}
        <Button className={styles.productDetails__button} onClick={handleOrder}>
          Оформить подписку
        </Button>
        {/* // ) : (
        //   <Button
        //     onClick={() => toast.warn("Сначала выберите подписку!")}
        //     className={styles.productDetails__button}
        //   >
        //     Оформить подписку
        //   </Button>
        // )} */}
      </div>
    </div>
  );
}
