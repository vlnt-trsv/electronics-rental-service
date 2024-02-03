import styles from "./ProductInfo.module.scss";
import CardDeviceItem from "./CardDeviceItem";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "@/redux/slices/productsSlice";

const ProductInfo = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const products = useSelector((state) => state.products[categoryId]);
  console.log(categoryId, products);

  const dispatch = useDispatch();
  const handleProductClick = (product) => {
    navigate(`${product.name}`);
    dispatch(
      setSelectedProduct({
        id: product.id,
        name: product.name,
        title: product.title,
        price: product.price,
      })
    );
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__cards}>
        {products &&
          products.map((product) => (
            <CardDeviceItem
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              altText={product.altText}
              onClick={() => handleProductClick(product)}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductInfo;
