import Checkbox from "@/components/ui/checkbox/checkbox";
import style from "./NotificationInfo.module.scss";
import { useState } from "react";

const NotificationInfo = () => {
  const [isOrderStatusChecked, setIsOrderStatusChecked] = useState(true);
  const [isRentalStatusChecked, setIsRentalStatusChecked] = useState(true);
  const [isNewPromotionsChecked, setIsNewPromotionsChecked] = useState(true);
  const [isNewArrivalsChecked, setIsNewArrivalsChecked] = useState(true);

  const toggleOrderStatus = () =>
    setIsOrderStatusChecked(!isOrderStatusChecked);
  const toggleRentalStatus = () =>
    setIsRentalStatusChecked(!isRentalStatusChecked);
  const toggleNewPromotions = () =>
    setIsNewPromotionsChecked(!isNewPromotionsChecked);
  const toggleNewArrivals = () =>
    setIsNewArrivalsChecked(!isNewArrivalsChecked);

  return (
    <div className={style.notify}>
      <span className={style.notify__title}>Настройка уведомлений</span>
      <div className={style.notify__extra}>
        <span className={style.notify__subtitle}>
          Пожалуйста, укажите параметры, которые хотите видеть
        </span>
        <span className={style.notify__description}>
          Отмеченные параметры будут отображаться в виде уведомлений
        </span>
      </div>
      <Checkbox
        label="Уведомления о статусе заказа"
        checked={isOrderStatusChecked}
        onChange={toggleOrderStatus}
      />
      <Checkbox
        label="Уведомления о статусе аренды"
        checked={isRentalStatusChecked}
        onChange={toggleRentalStatus}
      />
      <Checkbox
        label="Уведомления об новых акциях"
        checked={isNewPromotionsChecked}
        onChange={toggleNewPromotions}
      />
      <Checkbox
        label="Уведомления о новых поступлениях товаров"
        checked={isNewArrivalsChecked}
        onChange={toggleNewArrivals}
      />
    </div>
  );
};

export default NotificationInfo;
