import { useEffect, useState } from "react";
import styles from "./Steps.module.scss";
import { StepsCardItemMain, LineItemMain } from "@/entities​";

export default function Steps() {
  const stepsData = [
    {
      title: "Вход",
      status: "В процессе",
      description: "Зарегистрируйтесь и войдите в личный кабинет",
    },
    {
      title: "Личные данные",
      status: "В процессе",
      description: "В разделе 'Персональные данные' вести данные",
    },
    {
      title: "Перейти в девайсы",
      status: "В процессе",
      description: "Перейти в раздел 'Девайсы' и выбрать то, что по душе",
    },
    {
      title: "Оплата",
      status: "В процессе",
      description:
        "Оплатить аренду, используя любой из предоставленных способов",
    },
    {
      title: "Сам или не сам?",
      status: "В процессе",
      description: "Забрать электронику самому или дождаться доставки",
    },
    {
      title: "Наслаждаться арендой",
      status: "Насладиться",
      description:
        "Самое время насладится музыкой, игрой или просмотром фильма на большом проекторе",
    },
  ];

  const [cardsStatus, setCardsStatus] = useState(
    stepsData.map((_step, index) =>
      index === stepsData.length - 1 ? "Насладиться" : "В процессе"
    )
  );

  useEffect(() => {
    const handleScroll = () => {
      const middleCardIndex = stepsData.findIndex((step, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          return (
            rect.top < window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          );
        }
        return false;
      });

      if (middleCardIndex !== -1 && middleCardIndex !== stepsData.length - 1) {
        setCardsStatus((prevStatus) =>
          prevStatus.map((status, index) => {
            if (index === middleCardIndex) {
              return "Пройдено";
            }
            return status;
          })
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stepsData]);

  return (
    <div className={styles.steps}>
      <span className={styles.steps__title}>Просто и быстро</span>
      <span className={styles.steps__subtitle}>
        Всего 5 действий от заветной аренды
      </span>
      <div className={styles.steps__cards}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className={`${styles.steps__card} ${
              cardsStatus[index] === "Пройдено" ? styles.completed : ""
            }`}
          >
            <LineItemMain status={cardsStatus[index]} />
            <StepsCardItemMain
              title={step.title}
              status={cardsStatus[index]}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
