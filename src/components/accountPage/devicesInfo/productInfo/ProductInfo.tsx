import styles from "./ProductInfo.module.scss";
import CardDeviceItem from "./CardDeviceItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "@/redux/slices/productsSlice";
import { useGetProductsQuery } from "@/api/api";
import Notice from "@/components/ui/notice/Notice";

const ProductInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryId = useSelector(
    (state: any) => state.categories.selectedCategory?._id
  );
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(categoryId);

  console.log("PRODUCTS", products?.devices);

  const handleProductClick = (product: any) => {
    navigate(`${product.name}`);
    dispatch(setSelectedProduct(product));
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
