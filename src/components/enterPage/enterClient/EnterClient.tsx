import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EnterClient.module.scss";
import { Input } from "@/components/ui/input";
import { login } from "@/redux/slices/auth/authSlice";
import axiosInstance from "@/redux/slices/axiosInstance";

const EnterClient = () => {
  const email = useSelector((state: any) => state.auth.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const verifyCode = async (email: string, code: string) => {
    try {
      const numericCode = parseInt(code, 10);
      const response = await axiosInstance.post(
        "/user/login/verify",
        // Примечание: email и code передаются как данные в теле запроса
        {
          email,
          code: numericCode,
        }
      );
      const { _id, token } = response.data;
      localStorage.setItem("authToken", token);
      dispatch(login({ _id, email, token }));
      navigate(`/accountPage/personalDataInfo`);
    } catch (error) {
      // Обработка ошибки, например, вывод сообщения об ошибке
      console.error("Ошибка при верификации кода:", error);
    }
  };

  const handleInputChange = (index, value) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value;
    setCodeInputs(newCodeInputs);

    if (value !== "" && /^[0-9]$/.test(value)) {
      if (index < 3) {
        document.getElementById(`codeInput${index + 1}`).focus();
      } else {
        const enteredCode = newCodeInputs.join("");
        setIsLoading(true);
        verifyCode(email, enteredCode);
      }
    }
  };

  const handleBackspace = (index) => {
    if (index > 0 && codeInputs[index] === "") {
      const newCodeInputs = [...codeInputs];
      newCodeInputs[index - 1] = "";
      setCodeInputs(newCodeInputs);
      document.getElementById(`codeInput${index - 1}`).focus();
    } else if (codeInputs[index] === "" && index === 0) {
      document.getElementById(`codeInput${index}`).focus();
    }
  };

  return (
    <div className={styles.enter}>
      <span className={styles.enter__title}>Введите код</span>
      <Input placeholder={email} disabled className={styles.enter__number} />
      {isLoading ? (
        <div className={`${styles.enter__form__complete} complete`}>
          Отправка кода...
        </div>
      ) : (
        <form className={styles.enter__form}>
          {codeInputs.map((value, index) => (
            <Input
              className={styles.enter__input}
              autoComplete="none"
              key={index}
              id={`codeInput${index}`}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index)}
            />
          ))}
        </form>
      )}
      <Link to={"/enterPage"} className={styles.enter__back}>
        Вернуться на страницу ввода телефона
      </Link>
    </div>
  );
};

export default EnterClient;
