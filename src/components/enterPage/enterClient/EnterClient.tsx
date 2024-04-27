import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./EnterClient.module.scss";
import { Input } from "@/components/ui/input";
import { useVerifyCodeMutation } from "@/shared/api/api";
import { useParams } from "react-router-dom";

const EnterClient = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [verifyCode, { isLoading, isError }] = useVerifyCodeMutation();

  const handleInputChange = (index, value) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value;
    setCodeInputs(newCodeInputs);

    if (value !== "" && /^[0-9]$/.test(value)) {
      if (index < 3) {
        document.getElementById(`codeInput${index + 1}`).focus();
      } else {
        const enteredCode = parseInt(newCodeInputs.join(""), 10);
        handleVerifyCode(email, enteredCode);
      }
    }
  };

  const handleVerifyCode = async (email: string, enteredCode: number) => {
    try {
      const result = await verifyCode({ email, code: enteredCode });
      const user = result?.data?.user;
      localStorage.setItem("userData", JSON.stringify({ ...user }));
      console.log(user);
      navigate("/accountPage");
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
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
      <Link to={"/enterPage"} className={styles.enter__back}>
        Вернуться на страницу ввода телефона
      </Link>
    </div>
  );
};

export default EnterClient;
