import Checkbox from "@/components/ui/checkbox/checkbox";
import style from "./NotificationInfo.module.scss";
import { useState } from "react";

const NotificationInfo = () => {
  const [checkboxes, setCheckboxes] = useState([
    { label: "Уведомления о статусе заказа", checked: false },
    { label: "Уведомления о статусе аренды", checked: true },
    { label: "Уведомления об новых акциях", checked: true },
    { label: "Уведомления о новых поступлениях товаров", checked: true },
  ]);

  const toggleCheckbox = (index: any) => {
    setCheckboxes(
      checkboxes.map((checkbox, i) => {
        if (i === index) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      })
    );
  };

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
      {checkboxes.map((checkbox, index) => (
        <Checkbox
          key={checkbox.label}
          label={`${checkbox.label} ${checkbox.checked}`}
          checked={checkbox.checked}
          onChange={() => toggleCheckbox(index)}
        />
      ))}
    </div>
  );
};

export default NotificationInfo;
