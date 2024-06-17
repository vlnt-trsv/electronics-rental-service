import AccordionDemo from "@/shared/ui/accordion/Accordion";
import styles from "./FAQ.module.scss";
import Notice from "@/shared/ui/notice/Notice";

export default function FAQ() {
  // TODO: Подключить запрос на получение информации по FAQ
  const items: { _id: number; question: string; answer: string }[] = [
    {
      _id: 1,
      question: "Как пользоваться сервисом?",
      answer:
        "Чтобы пользоваться сервисом, вам необходимо зарегистрироваться и выбрать нужное устройство для аренды. После этого следуйте инструкциям на экране для завершения процесса аренды.",
    },
    {
      _id: 2,
      question: "Как оплатить аренду?",
      answer:
        "Вы можете оплатить аренду с помощью кредитной карты или через систему электронных платежей, поддерживаемую нашим сервисом.",
    },
    {
      _id: 3,
      question: "Можно ли продлить аренду?",
      answer:
        "Да, вы можете продлить аренду через ваш личный кабинет на сайте.",
    },
    {
      _id: 4,
      question: "Устройство неисправно?",
      answer:
        "Если устройство неисправно, свяжитесь с нашей службой поддержки по телефону, указанному в контактах.",
    },
    {
      _id: 5,
      question: "Как вернуть устройство?",
      answer:
        "Вы можете вернуть устройство, следуя инструкциям, которые вы получите при завершении аренды. Обычно это можно сделать в одном из наших пунктов приема.",
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
        <AccordionDemo key={items[0]?._id} items={items} />
      )}
    </div>
  );
}
