import styles from "./PersonalDataInfo.module.scss";
import { Input } from "@/components/ui/input";
// import { useSelector } from "react-redux";
import Popup from "@/components/ui/popup/popup";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "@/api/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: any;
  lastName: any;
  patronymic: any;
  nickname: any;
  email: any;
  phone: any;
  consentToPrivacyPolicy: any;
  consentToDataProcessing: any;
  consentToReceiveNotifications: any;
  [key: string]: any;
}

const PersonalDataInfo: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const userData = useSelector((state: any) => state.user.user);
  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const { data: userData } = useGetUserByIdQuery(userId._id);

  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    patronymic: "",
    nickname: "",
    email: "",
    phone: "",
    consentToPrivacyPolicy: false,
    consentToDataProcessing: false,
    consentToReceiveNotifications: false,
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData?.user?.firstName || "",
        lastName: userData?.user?.lastName || "",
        patronymic: userData?.user?.patronymic || "",
        nickname: userData?.user?.nickname || "",
        email: userData?.user?.email || "",
        phone: userData?.user?.phone || "",
        consentToPrivacyPolicy: userData?.user?.consentToPrivacyPolicy || false,
        consentToDataProcessing:
          userData?.user?.consentToDataProcessing || false,
        consentToReceiveNotifications:
          userData?.user?.consentToReceiveNotifications || false,
      });
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const hasFormDataChanged = () => {
    return Object.keys(formData).some((key) => formData[key] !== userData[key]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.consentToPrivacyPolicy && formData.consentToDataProcessing) {
      if (hasFormDataChanged()) {
        try {
          await toast.promise(
            updateUser({
              userId: userData?.user?._id,
              updatedData: formData,
            }).unwrap(),
            {
              pending: "Сохранение данных...",
              success: `Данные успешно сохранены ${new Date().toLocaleDateString()} в ${new Date().toLocaleTimeString()}`,
              error: "Ошибка при сохранении данных",
            }
          );
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        toast.warn("Данные не изменились.");
      }
    } else {
      toast.warn("Проставьте обе галочки перед сохранением.");
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteUser(userData?.user?._id).unwrap();
      Cookies.remove("connect.user");
      Cookies.remove("connect.sid");
      navigate("/enterPage");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ошибка при удалении аккаунта.");
    } finally {
      setIsPopupOpen(false);
    }
  };

  const fullName = [
    { name: "firstName", placeholder: "Имя", type: "text" },
    { name: "lastName", placeholder: "Фамилия", type: "text" },
    { name: "patronymic", placeholder: "Отчество", type: "text" },
  ];

  const extra = [
    { name: "nickname", placeholder: "Никнейм", type: "text" },
    { name: "email", placeholder: "Email", type: "email", disabled: true },
    { name: "phone", placeholder: "Телефон", type: "tel" },
  ];

  const checkboxFields = [
    {
      name: "consentToPrivacyPolicy",
      label: "Я ознакомлен с Политикой Конфиденциальности",
    },
    {
      name: "consentToDataProcessing",
      label: "Я даю Согласие на обработку персональных данных",
    },
    {
      name: "consentToReceiveNotifications",
      label: "Я хочу получать информационные и рекламные уведомления",
    },
  ];

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
          {fullName.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              className={styles.personal__input}
              onChange={handleChange}
              required
              validationEnabled
              autoComplete="none"
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <div className={styles.personal__form__extra}>
          {extra.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              className={styles.personal__input}
              onChange={handleChange}
              required
              validationEnabled
              autoComplete="none"
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
          ))}
        </div>
        <div className={styles.personal__form}>
          <span className={styles.personal__title}>Согласие пользователя</span>
          {checkboxFields.map((field) => (
            <label key={field.name} className={styles.personal__checkbox}>
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name]}
                onChange={handleChange}
              />
              {field.label}
            </label>
          ))}
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
