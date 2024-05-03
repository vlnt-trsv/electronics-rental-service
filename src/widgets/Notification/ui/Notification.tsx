import Checkbox from "@/shared/ui/checkbox/checkbox";
import style from "./Notification.module.scss";
import { useState } from "react";

export default function Notification() {
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
}
