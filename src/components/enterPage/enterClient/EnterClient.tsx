import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import axios from "axios";

import styles from "./EnterClient.module.scss";
import { Input } from "@/components/ui/input";

const EnterClient = () => {
  const { phoneNumber } = useParams();
  const navigate = useNavigate();

  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (index, value) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value;
    setCodeInputs(newCodeInputs);

    if (index === 3 && value !== "") {
      const enteredCode = newCodeInputs.join("");
      console.log("Entered Code:", enteredCode);

      setIsLoading(true);

      //   axios
      //     .post("/api/send-sms", { phoneNumber, code: enteredCode })
      //     .then((response) => {
      //       console.log("SMS sent successfully:", response.data);
      //       setIsLoading(false);
      //       navigate("/nextPage");
      //     })
      //     .catch((error) => {
      //       console.error("Failed to send SMS:", error);
      //       setIsLoading(false);
      //     });
      // }

      setTimeout(() => {
        setIsLoading(false);
        navigate("/accountPage/personalDataInfo");
      }, 2000);
    }

    if (index < 3 && value !== "") {
      document.getElementById(`codeInput${index + 1}`).focus();
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
      <Input
        placeholder={phoneNumber}
        disabled
        className={styles.enter__number}
      />
      {isLoading ? (
        // <div className={styles.loader}>Loading...</div>
        <>
          <form className={styles.enter__form__complete}>
            {/* <Input
              className={styles.enter__input}
              autoComplete="none"
              type="text"
            /> */}
            <div className={`${styles.enter__form__complete} complete`}>
              L
            </div>
          </form>
        </>
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
