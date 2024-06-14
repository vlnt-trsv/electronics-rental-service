import { Button } from "@/shared/ui/button/button";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styles from "./ProductOrderCard.module.scss";
import { useCreateRentalMutation } from "@/shared/api/api";
import { CardUpProps, CardDownProps, IRental } from "./IProductOrderCard";
import { getImageUrl } from "@/shared/lib";

export default function ProductsOrder() {
  const [deliveryMethod, setDeliveryMethod] = useState("Доставка");

  const handleDeliveryMethodChange = useCallback((method: string) => {
    setDeliveryMethod(method);
  }, []);

  const selectedProduct = JSON.parse(
    localStorage.getItem("selectedProduct") || ""
  );

  const productImage = getImageUrl(selectedProduct.deviceImage);

  const selectedCategory = JSON.parse(
    localStorage.getItem("selectedCategory") || ""
  );
  const selectedSubscription = JSON.parse(
    localStorage.getItem("selectedSubscriptionOption") || ""
  );

  const productPrice = selectedSubscription?.price || 0;
  const deliveryPrice = deliveryMethod === "Доставка" ? 240 : 0;
  const totalPrice = productPrice + deliveryPrice;

  return (
    <div className={styles.cardItem}>
      <CardUp
        visible={deliveryMethod === "Доставка"}
        selectedProduct={selectedProduct}
        getImage={productImage} // Передаем функцию, а не результат ее вызова
        selectedCategory={selectedCategory}
        selectedSubscription={selectedSubscription}
        totalPrice={totalPrice}
      />
      <CardDown
        selectedProduct={selectedProduct}
        selectedCategory={selectedCategory}
        selectedSubscription={selectedSubscription}
        deliveryMethod={deliveryMethod}
        totalPrice={totalPrice}
        onDeliveryMethodChange={handleDeliveryMethodChange}
      />
    </div>
  );
}

function CardUp({
  visible,
  selectedProduct,
  selectedCategory,
  selectedSubscription,
  totalPrice,
  getImage,
}: CardUpProps) {
  return (
    <div className={styles.cardUp}>
      <span className={styles.title}>Аренда девайса</span>
      <hr className={styles.hr} />
      <div className={styles.cardUp__row}>
        <div className={styles.cardUp__image}>
          <img className={styles.img} src={getImage} alt="img" />
        </div>
        <div className={styles.cardUp__column}>
          <div className={styles.cardUp__text}>
            <span className={styles.cardUp__subtitle}>
              {selectedCategory?.name || "null"}
            </span>
            <span className={styles.cardUp__title}>
              {selectedProduct?.name || "null"}
            </span>
          </div>
          <div className={styles.cardUp__justify}>
            <div className={styles.cardUp__text}>
              <span>
                Подписка на {selectedSubscription?.duration || "null"} дней
              </span>
              <span>{selectedSubscription?.price || "null"} ₽</span>
            </div>
            <hr className={styles.hr} />
            <div className={styles.cardUp__text}>
              <span>Доставка</span>
              {visible ? "240 ₽" : "Нет"}
            </div>
            <div className={styles.cardUp__text}>
              <span>К оплате</span>
              <span>{totalPrice} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDown({
  deliveryMethod,
  onDeliveryMethodChange,
  selectedProduct,
  selectedSubscription,
}: CardDownProps) {
  // const handlePayment = useCallback(() => {
  //   console.log("Оплата прошла");
  //   navigate("/success");
  // }, [navigate]);

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const [createRental] = useCreateRentalMutation({});

  const navigate = useNavigate();

  const handleAddRent = async () => {
    try {
      const rentalData: IRental = {
        userId: userData?._id,
        deviceId: selectedProduct._id,
        subscriptionOptionsId: selectedSubscription._id,
        deliveryMethod: deliveryMethod,
      };
      await createRental(rentalData).unwrap();
      navigate("/accountPage/subs");
    } catch (error) {
      console.error("Ошибка при отправке аренды:", error);
    }
  };

  return (
    <div className={styles.cardDown}>
      <div className={styles.cardDown__upper}>
        <span className={styles.title}>Способ получения</span>
        <hr className={styles.hr} />
        <div className={styles.cardDown__button}>
          <Button
            variant={deliveryMethod === "Самовывоз" ? "primary" : "" || null}
            onClick={() => onDeliveryMethodChange("Самовывоз")}
            className={styles.cardDown__button}
          >
            Самовывоз
          </Button>
          <Button
            variant={deliveryMethod === "Доставка" ? "primary" : "" || null}
            onClick={() => onDeliveryMethodChange("Доставка")}
            className={styles.cardDown__button}
          >
            Доставка
          </Button>
        </div>
        {deliveryMethod === "Самовывоз" ? (
          <div className={styles.cardUp__text}>
            <span>
              <span className={styles.cardUp__subtitle}>
                Забрать девайс можно по адресу: <br />
              </span>
              г. Новосибирск, ул. Красный проспект 81, Пн-Пт 10:00 - 19:00,
              Сб-Вс 10:00 - 16:00
            </span>
          </div>
        ) : deliveryMethod === "Доставка" ? (
          <div className={styles.cardUp__text}>
            <span>
              Наши менеджеры свяжутся с тобой для уточнения адреса доставки
            </span>
          </div>
        ) : null}
      </div>
      {/* Реализовать оплату */}
      <Button onClick={handleAddRent} className={styles.cardDown__button}>
        Перейти к оплате
      </Button>
    </div>
  );
}
