import styles from "./PersonalDataInfo.module.scss";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import Popup from "@/components/ui/popup/popup";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/redux/slices/api/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PersonalDataInfo: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userData = useSelector((state: any) => state.user.user);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    patronymic: userData?.patronymic || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    consentToPrivacyPolicy: userData?.consentToPrivacyPolicy || false,
    consentToDataProcessing: userData?.consentToDataProcessing || false,
    consentToReceiveNotifications:
      userData?.consentToReceiveNotifications || false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.consentToPrivacyPolicy && formData.consentToDataProcessing) {
        const result = await toast.promise(
          updateUser({ userId: userData._id, updatedData: formData }),
          {
            pending: "Сохранение данных...",
            success: `Данные успешно сохранились ${new Date().toLocaleDateString()} в ${new Date().toLocaleTimeString()}`,
            error: "Ошибка при сохранении данных",
          }
        );
        console.log(result);
      } else {
        toast.warn("Проставьте обе галочки перед сохранением.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = () => {
    setIsPopupOpen(true);
  };
  const confirmDelete = async () => {
    await deleteUser(userData._id);
    Cookies.remove("connect.user");
    Cookies.remove("connect.sid");
    navigate("/enterPage");
  };

  return (
    <>
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
            value={formData?.firstName}
            className={styles.personal__input}
            onChange={handleInputChange}
            required
            validationEnabled
            autoComplete="none"
            placeholder="Имя"
          />
          <Input
            type="text"
            name="lastName"
            value={formData?.lastName}
            className={styles.personal__input}
            onChange={handleInputChange}
            required
            validationEnabled
            autoComplete="none"
            placeholder="Фамилия"
          />
          <Input
            type="text"
            name="patronymic"
            value={formData?.patronymic}
            className={styles.personal__input}
            onChange={handleInputChange}
            autoComplete="none"
            placeholder="Отчество"
          />
        </div>
        <div className={styles.personal__form__extra}>
          <Input
            type="email"
            name="email"
            value={formData?.email}
            className={styles.personal__input}
            onChange={handleInputChange}
            validationEnabled
            autoComplete="none"
            placeholder="Email"
            disabled
          />
          <Input
            type="tel"
            name="phone"
            value={formData?.phone}
            className={styles.personal__input}
            onChange={handleInputChange}
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
              checked={formData?.consentToPrivacyPolicy}
              onChange={handleCheckboxChange}
            />
            Я ознакомлен с Политикой Конфиденциальности
          </label>
          <label className={styles.personal__checkbox}>
            <input
              type="checkbox"
              name="consentToDataProcessing"
              checked={formData?.consentToDataProcessing}
              onChange={handleCheckboxChange}
            />
            Я даю Согласие на обработку персональных данных
          </label>
          <label className={styles.personal__checkbox}>
            <input
              type="checkbox"
              name="consentToReceiveNotifications"
              checked={formData?.consentToReceiveNotifications}
              onChange={handleCheckboxChange}
            />
            Я хочу получать информационные и рекламные уведомления
          </label>
        </div>
        <div className={styles.personal__action}>
          <Button size={"lg"} variant={"success"} type="submit">
            Сохранить изменения
          </Button>
          <Button
            size={"lg"}
            variant={"danger"}
            type="button"
            onClick={handleDelete}
          >
            Удалить аккаунт
          </Button>
        </div>
      </form>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={confirmDelete}
      >
        <span>Вы уверены, что хотите удалить аккаунт?</span>
        <span style={{ opacity: "0.5" }}>
          Если вы удалите аккаунт, то данные будут безвозвратно удалены.
        </span>
      </Popup>
    </>
  );
};

export default PersonalDataInfo;
