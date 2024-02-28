import styles from "./FaqInfo.module.scss";
import Accordion from "./accordion/Accordion.jsx";

const accordionData = [
  {
    id: "item-1",
    question: "Вопрос №1",
    answer: "Ответ",
  },
  {
    id: "item-2",
    question: "Вопрос №2",
    answer: "Ответ",
  },
  {
    id: "item-3",
    question: "Вопрос №3",
    answer: "Ответ",
  },
  {
    id: "item-4",
    question: "Вопрос №4",
    answer: "Ответ",
  },
  {
    id: "item-5",
    question: "Вопрос №5",
    answer: "Ответ",
  },
];

const FaqInfo = () => {
  return (
    <div id="faq" className={styles.faq}>
      <span className={styles.faq__title}>Остались вопросы?</span>
      <span className={styles.faq__subtitle}>
        Ознакомьтесь с часто задаваемыми вопросами
      </span>
      <Accordion accordionData={accordionData} />
    </div>
  );
};

export default FaqInfo;
