import { Button } from "@/components/ui/button";
import styles from "./CardItem.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import SuccesfullyPayment from "../GetPayment/GetPayment";

const CardUp = () => {
  return (
    <div className={styles.cardUp}>
      <span className={styles.title}>Аренда приставки</span>
      <hr className={styles.hr} />
      <div className={styles.cardUp__info}>
        <div className={styles.cardUp__image}>
          <img className={styles.img} src="" alt="img" />
        </div>
        <div className={styles.cardUp__text__title}>
          <div className={styles.cardUp__text}>
            <span className={styles.cardUp__subtitle}>Приставки</span>
            <span className={styles.cardUp__title}>Playstation 5 </span>
          </div>
          <div className={styles.cardUp__text}>
            <span>Подписка на 2 дня</span>
            <span>990 ₽</span>
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
        <span>240 ₽</span>
      </div>
      <div className={styles.cardUp__text}>
        <span>К оплате</span>
        <span>1230 ₽</span>
      </div>
    </div>
  );
};
const CardDown = ({
  deliveryMethod,
  calculateTotalPrice,
  onDeliveryMethodChange,
}) => {
  const navigate = useNavigate();

  // Функция для обработки оплаты и перехода к следующему шагу
  const handlePayment = () => {
    console.log("Оплата прошла");
    navigate("/success"); // Перенаправляем на страницу успешной оплаты
  };

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
        <div className={styles.cardUp__text}>
          <span>К оплате</span>
          <span>{calculateTotalPrice()} ₽</span>
        </div>
      </div>
      {/* Реализовать оплату */}
      <Link className={styles.cardDown__link} to="/success">
        <Button className={styles.cardDown__button}>Перейти к оплате</Button>
      </Link>
    </div>
  );
};

const CardItem = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("Доставка"); // Состояние для выбора способа получения
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Обработчик изменения способа получения
  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
  };

  const calculateTotalPrice = () => {
    const productPrice = selectedProduct ? selectedProduct.price : 0;
    const deliveryPrice = deliveryMethod === "" ? 460 : 0;
    return productPrice + deliveryPrice;
  };

  return (
    <div className={styles.cardItem}>
      <CardUp />
      <CardDown
        selectedProduct={selectedProduct}
        deliveryMethod={deliveryMethod}
        calculateTotalPrice={calculateTotalPrice}
        onDeliveryMethodChange={handleDeliveryMethodChange}
      />
      {/* <SuccesfullyPayment /> */}
    </div>
  );
};

export default CardItem;
