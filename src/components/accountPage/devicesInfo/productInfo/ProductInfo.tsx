import styles from "./ProductInfo.module.scss";
import CardDeviceItem from "./CardDeviceItem";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "@/redux/slices/productsSlice";
import { useGetProductsQuery } from "@/redux/slices/api/api";

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

  console.log("PRODUCTS:", "id", categoryId, "devices", products);

  const handleProductClick = (product: any) => {
    navigate(`${product.name}`);
    dispatch(setSelectedProduct(product));
  };

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__cards}>
        {isLoading ? (
          <p>Loading products...</p>
        ) : isError ? (
          <p>Ошибка загрузки продуктов - вы не выбрали категорию или нет девайсов</p>
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
