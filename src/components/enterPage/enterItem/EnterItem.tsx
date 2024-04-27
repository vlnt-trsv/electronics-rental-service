import { Link, useNavigate } from "react-router-dom";
import styles from "./EnterItem.module.scss";
import EnterHookForm from "../enterHookForm/EnterHookForm";
import { useSendCodeMutation } from "@/shared/api/api";
import { toast } from "react-toastify";

const EnterItem = () => {
  const navigate = useNavigate();
  const [sendCode] = useSendCodeMutation();

  const handleGetCode = async (data: { email: string }) => {
    try {
      const result = await toast.promise(sendCode(data.email).unwrap(), {
        pending: "Отправление кода...",
        success: "Одноразовый код отправлен",
        error: "Ошибка при отправке кода",
      });
      console.log(result);
      navigate(`/enterPage/enterClient/${data.email}`);
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
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
