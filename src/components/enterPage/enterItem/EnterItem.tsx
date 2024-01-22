import { Link, useNavigate } from "react-router-dom";
import styles from "./EnterItem.module.scss";
import EnterHookForm from "../enterHookForm/EnterHookForm";



const EnterItem = () => {
  const navigate = useNavigate();

  const handleGetCode = (data) => {
    if (data.tel && /^[78]\d{10}$/.test(data.tel)) {
      console.log(`Sending SMS to ${data.tel}`);
      navigate(`/enterPage/enterClient/${data.tel}`);
    } else {
      console.log(`ERROR: sending SMS to ${data.tel}`);
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
