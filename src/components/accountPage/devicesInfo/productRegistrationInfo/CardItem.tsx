import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CardItem.module.scss";
// import SuccesfullyPayment from "../GetPayment/GetPayment";

const CardUp = memo(
  ({
    visible,
    selectedProduct,
    selectedCategory,
    selectedSubscription,
    calculateTotalPrice,
  }) => (
    <div className={styles.cardUp}>
      <span className={styles.title}>Аренда приставки</span>
      <hr className={styles.hr} />
      <div className={styles.cardUp__info}>
        <div className={styles.cardUp__image}>
          <img className={styles.img} src="" alt="img" />
        </div>
        <div className={styles.cardUp__text__title}>
          <div className={styles.cardUp__text}>
            <span className={styles.cardUp__subtitle}>
              {selectedCategory?.title}
            </span>
            <span className={styles.cardUp__title}>
              {selectedProduct?.title}
            </span>
          </div>
          <div className={styles.cardUp__text}>
            <span>Подписка на {selectedSubscription?.duration}</span>
            <span>{selectedSubscription?.price}</span>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      {/* <div>
        <Button>Использовать бонусы</Button>
        <span>Введите количество бонусов</span>
      </div> */}
      {/* <div>
        <span>Бонусы</span>
        <span>0 ₽</span>
      </div> */}
      <div className={styles.cardUp__text}>
        <span>Доставка</span>
        {visible ? "240 ₽" : "Нет"}
      </div>
      <div className={styles.cardUp__text}>
        <span>К оплате</span>
        <span>{calculateTotalPrice()} ₽</span>
      </div>
    </div>
  )
);

const CardDown = memo(({ deliveryMethod, onDeliveryMethodChange }) => {
  const navigate = useNavigate();
  const handlePayment = useCallback(() => {
    console.log("Оплата прошла");
    navigate("/success");
  }, [navigate]);

  return (
    <div className={styles.cardDown}>
      <div className={styles.cardDown__upper}>
        <span className={styles.title}>Способ получения</span>
        <hr className={styles.hr} />
        <div className={styles.cardDown__button}>
          <Button
            variant={deliveryMethod === "Самовывоз" ? "primary" : ""}
            onClick={() => onDeliveryMethodChange("Самовывоз")}
            className={styles.cardDown__button}
          >
            Самовывоз
          </Button>
          <Button
            variant={deliveryMethod === "Доставка" ? "primary" : ""}
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
      <Link className={styles.cardDown__link} to="/success">
        <Button className={styles.cardDown__button}>Перейти к оплате</Button>
      </Link>
    </div>
  );
});

const CardItem = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("Доставка"); // Состояние для выбора способа получения
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const selectedSubscription = useSelector(
    (state) => state.subscriptionOptions.selectedSubscription
  );

  const handleDeliveryMethodChange = useCallback((method) => {
    setDeliveryMethod(method);
  }, []);

  const calculateTotalPrice = useCallback(() => {
    const productPrice = selectedSubscription?.price || 0;
    const deliveryPrice = deliveryMethod === "Доставка" ? 460 : 0;
    return productPrice + deliveryPrice;
  }, [selectedSubscription, deliveryMethod]);

  return (
    <div className={styles.cardItem}>
      <CardUp
        visible={deliveryMethod === "Доставка"}
        selectedProduct={selectedProduct}
        selectedCategory={selectedCategory}
        selectedSubscription={selectedSubscription}
        calculateTotalPrice={calculateTotalPrice}
      />
      <CardDown
        deliveryMethod={deliveryMethod}
        onDeliveryMethodChange={handleDeliveryMethodChange}
      />
      {/* <SuccesfullyPayment /> */}
    </div>
  );
};

export default CardItem;
