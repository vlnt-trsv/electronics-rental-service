import styles from "./ProductInfo.module.scss";
import CardDeviceItem from "./CardDeviceItem";
import { useNavigate } from "react-router-dom";

const ProductInfo = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/accountPage/devices/registration");
  };
  return (
    <div className={styles.product}>
      <div className={styles.product__cards}>
        <CardDeviceItem
          onClick={() => handleCardClick()}
          title="Playstation 5"
          price="от 990 ₽"
          imageUrl
          altText="Playstation 5"
        />
        <CardDeviceItem
          onClick={() => handleCardClick()}
          title="Playstation 5"
          price="от 990 ₽"
          imageUrl
          altText="Playstation 5"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
