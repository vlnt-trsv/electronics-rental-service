import { useState } from "react";
import styles from "./PersonalDataInfo.module.scss";
import { Input } from "@/components/ui/input";

const PersonalDataInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    patronymic: "", // Отчество
    email: "",
    phone: "",
    consentToPrivacyPolicy: false,
    consentToDataProcessing: false,
    consentToReceiveNotifications: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка и отправка данных формы
    console.log(formData);
  };

  const handleDelete = () => {
    // Логика удаления персональных данных пользователя
    console.log("Удаление персональных данных");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.personal}>
      <span className={styles.personal__title}>Персональные данные</span>
      <div className={styles.personal__extra}>
        <span className={styles.personal__subtitle}>
          Указывай реальные данные
        </span>
        <span className={styles.personal__description}>
          При передаче девайса необходимо предъявить паспорт
        </span>
      </div>
      <div className={styles.personal__form__fullName}>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          className={styles.personal__input}
          onChange={handleChange}
          required
          validationEnabled
          autoComplete="none"
          placeholder="Имя"
        />
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          className={styles.personal__input}
          onChange={handleChange}
          required
          validationEnabled
          autoComplete="none"
          placeholder="Фамилия"
        />
        <Input
          type="text"
          name="patronymic"
          value={formData.patronymic}
          className={styles.personal__input}
          onChange={handleChange}
          autoComplete="none"
          placeholder="Отчество"
        />
      </div>
      <div className={styles.personal__form__extra}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          className={styles.personal__input}
          onChange={handleChange}
          required
          validationEnabled
          autoComplete="none"
          placeholder="Email"
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          className={styles.personal__input}
          onChange={handleChange}
          required
          validationEnabled
          autoComplete="none"
          placeholder="Телефон"
        />
      </div>
      <div className={styles.personal__form}>
        <span className={styles.personal__title}>Согласие пользователя</span>
        <label className={styles.personal__checkbox}>
          <input
            type="checkbox"
            name="consentToPrivacyPolicy"
            checked={formData.consentToPrivacyPolicy}
            onChange={handleChange}
          />
          Я ознакомлен с Политикой Конфиденциальности
        </label>
        <label className={styles.personal__checkbox}>
          <input
            type="checkbox"
            name="consentToDataProcessing"
            checked={formData.consentToDataProcessing}
            onChange={handleChange}
          />
          Я даю Согласие на обработку персональных данных
        </label>
        <label className={styles.personal__checkbox}>
          <input
            type="checkbox"
            name="consentToReceiveNotifications"
            checked={formData.consentToReceiveNotifications}
            onChange={handleChange}
          />
          Я хочу получать информационные и рекламные уведомления
        </label>
      </div>
      <div className={styles.personal__action}>
        <button className={styles.personal__action__save} type="submit">
          Сохранить изменения
        </button>
        <button
          className={styles.personal__action__delete}
          type="button"
          onClick={handleDelete}
        >
          Удалить персональные данные
        </button>
      </div>
    </form>
  );
};

export default PersonalDataInfo;
