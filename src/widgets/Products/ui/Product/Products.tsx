import styles from "./Product.module.scss";
import Notice from "@/shared/ui/notice/Notice";
import { ProductCard } from "@/entities​";
import { useMemo } from "react";
import { useProducts } from "../lib";

export default function Products() {
  const {
    products,
    category,
    isError,
    isLoading,
    handleProductClick,
    getImageUrl,
  } = useProducts();

  const hasProducts = useMemo(
    () => products?.devices && products.devices.length > 0,
    [products]
  );

  return (
    <div className={styles.product}>
      <div className={styles.product__cards}>
        {!hasProducts ? (
          <Notice
            data={products?.devices}
            isLoading={isLoading}
            isError={isError}
            message="Нет доступных девайсов"
          />
        ) : (
          Array.isArray(products?.devices) &&
          products?.devices.map((product: any) => (
            <ProductCard
              key={product._id}
              name={product.name}
              subtitle={category?.name}
              price={`${product.price} ₽`}
              imageUrl={getImageUrl(product.deviceImage)}
              altText={product.altText || "Image not available"}
              onClick={() => handleProductClick(product)}
            />
          ))
        )}
      </div>
    </div>
  );
}
