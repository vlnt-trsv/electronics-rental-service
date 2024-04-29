import styles from "./ProductInfo.module.scss";
import CardDeviceItem from "./CardDeviceItem";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/shared/api/api";
import Notice from "@/components/ui/notice/Notice";

const ProductInfo = () => {
  const navigate = useNavigate();

  const category = JSON.parse(localStorage.getItem("selectedCategory"));
  console.log(category._id)

  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(category._id);

  // console.log("PRODUCTS", products?.devices);

  const handleProductClick = (product: any) => {
    localStorage.setItem("selectedProduct", JSON.stringify({ ...product }));
    navigate(`${product.name}`);
  };

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  const hasProducts = products?.devices && products?.devices.length > 0;

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
            <CardDeviceItem
              key={product._id}
              title={product.name}
              subtitle={category.name}
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
};

export default ProductInfo;
