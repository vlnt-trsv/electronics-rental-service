import styles from "./FaqInfo.module.scss";
import Accordion from "./accordion/Accordion.jsx";


const FaqInfo = () => {
  return (
    <div className={styles.faq}>
      <span className={styles.faq__title}>Вопросы & Ответы</span>
      <Accordion />
    </div>
  );
};

export default FaqInfo;


