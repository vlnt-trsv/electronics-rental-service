import AccordionDemo from "@/shared/ui/accordion/Accordion";
import styles from "./FAQ.module.scss";
import Notice from "@/shared/ui/notice/Notice";

export default function FAQ() {
  // TODO: Подключить запрос на получение информации по FAQ
  const items: any = [
    {
      question: "Вопросы 1",
      answer: "Ответ 1",
    },
    {
      question: "Вопросы 2",
      answer: "Ответ 2",
    },
  ];

  return (
    <div className={styles.faq}>
      {!(items && items.length > 0) ? (
        <Notice
          data={items || []}
          isLoading={false}
          isFetching={false}
          isError={false}
          message="Нет данных"
        />
      ) : (
        <AccordionDemo key={items?.question} items={items} />
      )}
    </div>
  );
}
