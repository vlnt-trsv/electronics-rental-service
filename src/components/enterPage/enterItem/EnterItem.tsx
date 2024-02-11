import { Link, useNavigate } from "react-router-dom";
import styles from "./EnterItem.module.scss";
import EnterHookForm from "../enterHookForm/EnterHookForm";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/auth/authSlice";
import axiosInstance from "@/redux/slices/axiosInstance";

const EnterItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetCode = async (data: { email: any; }) => {
    try {
      // Используйте ваш настроенный экземпляр Axios (axiosInstance) для запроса
      await axiosInstance.post("/user/login", {
        // Примечание: email передаётся как данные в теле запроса
        email: data.email,
      });

      // Обновление Redux state после успешного запроса
      dispatch(setUser(data.email));

      // Переход на страницу ввода кода
      navigate(`/enterPage/enterClient`);

      console.log("Код отправлен!");
    } catch (error) {
      // Обработка ошибок при запросе
      console.error("Ошибка при отправке кода:", error.message);
    }
  };

  return (
    <div className={styles.enter}>
      <div className={`${styles.enter__content} content`}>
        <span className={styles.enter__title}>Вход в личный кабинет</span>
        <EnterHookForm
          handleGetCode={handleGetCode}
          formClassName={styles.enter__form}
        />
        <Link to={"/"} className={styles.enter__back}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default EnterItem;
