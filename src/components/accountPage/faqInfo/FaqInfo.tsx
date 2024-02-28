import AccordionDemo from "@/components/ui/accordion/Accordion";
import styles from "./FaqInfo.module.scss";

const FaqInfo = () => {
  const items = [
    {
      question: "Is it unstyled?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it unstyled?",
      answer:
        "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    },
    {
      question: "Can it be animated?",
      answer: "Yes! You can animate the Accordion with CSS or JavaScript.",
    },
    {
      question: "Can it be animated?",
      answer: "Yes! You can animate the Accordion with CSS or JavaScript.",
    },
    {
      question: "Can it be animated?",
      answer: "Yes! You can animate the Accordion with CSS or JavaScript.",
    },
    {
      question: "Can it be animated?",
      answer: "Yes! You can animate the Accordion with CSS or JavaScript.",
    },
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.faq__title}>Вопросы & Ответы</div>
      <div className={styles.faq__wrapper}>
        <AccordionDemo items={items} />
      </div>
    </div>
  );
};

export default FaqInfo;