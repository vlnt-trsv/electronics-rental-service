import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Enter.module.scss";
import EnterHookForm from "@/shared/hooks/enterHookForm/EnterHookForm";
import { Input } from "@/shared/ui/input/input";
import { useSendCodeMutation, useVerifyCodeMutation } from "@/shared/api/api";
import { toast } from "react-toastify";

export default function Enter() {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("email");
  const [currentStep, setCurrentStep] = useState(
    storedEmail ? "verifyCode" : "getCode"
  );
  const [email, setEmail] = useState(storedEmail || "");
  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [sendCode] = useSendCodeMutation();
  const [verifyCode] = useVerifyCodeMutation();

  const handleGetCode = async (data: { email: any }) => {
    try {
      await toast.promise(sendCode(data.email).unwrap(), {
        pending: "Отправление кода...",
        success: "Одноразовый код отправлен",
        error: "Ошибка при отправке кода",
      });
      setEmail(data.email);
      localStorage.setItem("email", email);
      setCurrentStep("verifyCode");
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
    }
  };

  const handleVerifyCode = async (email: string, enteredCode: number) => {
    try {
      const result = await verifyCode({ email, code: enteredCode }).unwrap();
      const user = result?.user;
      localStorage.setItem("userData", JSON.stringify({ ...user }));
      navigate("/accountPage");
      localStorage.removeItem("email");
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
      toast.error("Неверный код");
      localStorage.removeItem("email");
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value;
    setCodeInputs(newCodeInputs);

    if (value !== "" && /^[0-9]$/.test(value)) {
      if (index < 3) {
        document.getElementById(`codeInput${index + 1}`).focus();
      } else {
        const enteredCode = newCodeInputs.join("");
        handleVerifyCode(email, enteredCode);
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && codeInputs[index] === "") {
      const newCodeInputs = [...codeInputs];
      newCodeInputs[index - 1] = "";
      setCodeInputs(newCodeInputs);
      document.getElementById(`codeInput${index - 1}`).focus();
    }
  };

  return (
    <div className={styles.enter}>
      <div className={`${styles.enter__content} content`}>
        {currentStep === "getCode" && (
          <>
            <span className={styles.enter__title}>Вход в личный кабинет</span>
            <EnterHookForm
              handleGetCode={handleGetCode}
              formClassName={styles.enter__form__before}
            />
            <Link to={"/"} className={styles.enter__back}>
              Вернуться на главную
            </Link>
          </>
        )}
        {currentStep === "verifyCode" && (
          <>
            <span className={styles.enter__title}>Введите код</span>
            <Input
              placeholder={email}
              disabled
              className={styles.enter__number}
            />
            <div className={styles.enter__form__after}>
              {codeInputs.map((value, index) => (
                <Input
                  key={index}
                  className={styles.enter__input}
                  autoComplete="off"
                  id={`codeInput${index}`}
                  type="text"
                  value={value}
                  maxLength="1"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Backspace" && handleBackspace(index)
                  }
                />
              ))}
            </div>
            <Link
              to={currentStep === "verifyCode" ? "/enterPage" : "/"}
              className={styles.enter__back}
            >
              Вернуться на страницу ввода телефона
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
