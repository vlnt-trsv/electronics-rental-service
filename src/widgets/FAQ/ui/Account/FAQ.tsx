import AccordionDemo from "@/shared/ui/accordion/Accordion";
import styles from "./FAQ.module.scss";

export default function FAQ() {
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
      <AccordionDemo items={items} />
    </div>
  );
}
