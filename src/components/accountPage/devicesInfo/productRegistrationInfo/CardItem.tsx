import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SetStateAction, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CardItem.module.scss";
import { addSubscription } from "@/redux/slices/subsSlice";
import { useCreateRentalMutation } from "@/redux/slices/api/api";

const CardUp = memo(
  ({
    visible,
    selectedProduct,
    selectedCategory,
    selectedSubscription,
    totalPrice,
    getImage,
  }: any) => (
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
  )
);

const CardDown = memo(
  ({
    deliveryMethod,
    onDeliveryMethodChange,
    selectedProduct,
    selectedSubscription,
  }: any) => {
    // const navigate = useNavigate();
    // const handlePayment = useCallback(() => {
    //   console.log("Оплата прошла");
    //   navigate("/success");
    // }, [navigate]);

    const dispatch = useDispatch();

    const userData = useSelector((state: any) => state.user.user);

    const [createRental] = useCreateRentalMutation();

    const handlePaymentClick = async () => {
      try {
        const rentalData: any = {
          userId: userData?._id,
          deviceId: selectedProduct._id,
          subscriptionOptionsId: selectedSubscription.id,
          deliveryMethod: deliveryMethod,
        };
        console.log(rentalData);

        await createRental(rentalData).unwrap();
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
        <Link className={styles.cardDown__link} to="/accountPage/subs">
          <Button
            onClick={handlePaymentClick}
            className={styles.cardDown__button}
          >
            Перейти к оплате
          </Button>
        </Link>
      </div>
    );
  }
);

const CardItem = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("Доставка"); // Состояние для выбора способа получения
  const selectedProduct = useSelector(
    (state: any) => state.products.selectedProduct
  );
  console.log("PRODUCTS", selectedProduct);
  const selectedCategory = useSelector(
    (state: any) => state.categories.selectedCategory
  );
  console.log("CATEGORY", selectedCategory);
  const selectedSubscription = useSelector(
    (state: any) => state.subscriptionOptions.selectedSubscription
  );

  const handleDeliveryMethodChange = useCallback(
    (method: SetStateAction<string>) => {
      setDeliveryMethod(method);
    },
    []
  );

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  // Вычисление общей цены на основе выбранных данных
  const productPrice = selectedSubscription?.price || 0;
  const deliveryPrice = deliveryMethod === "Доставка" ? 240 : 0;
  const totalPrice = productPrice + deliveryPrice;

  return (
    <div className={styles.cardItem}>
      <CardUp
        visible={deliveryMethod === "Доставка"}
        selectedProduct={selectedProduct}
        getImage={getImageUrl(selectedProduct?.deviceImage)}
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
};

export default CardItem;
