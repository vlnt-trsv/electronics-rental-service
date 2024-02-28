import React, { useEffect, useState } from "react";
import styles from "./StepsInfo.module.scss";
import CardItem from "./cardItem/CardItem";
import LineItem from "./lineItem/LineItem";

const StepsInfo = () => {
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
    Array(stepsData.length).fill("")
  );

  useEffect(() => {
    const handleScroll = () => {
      const cardPositions: { index: number; top: number; bottom: number }[] =
        [];
      stepsData.forEach((_step, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          cardPositions.push({
            index,
            top: rect.top,
            bottom: rect.bottom,
          });
        }
      });
      const middleCard = cardPositions.find(
        ({ top, bottom }) =>
          top < window.innerHeight / 2 && bottom > window.innerHeight / 2
      );
      if (middleCard) {
        const updatedStatus = [...cardsStatus];
        if (stepsData[middleCard.index].title !== "Наслаждаться арендой") {
          updatedStatus[middleCard.index] = "Пройдено";
        } else {
          updatedStatus[middleCard.index] = "Насладиться";
        }
        setCardsStatus(updatedStatus);
      } else {
        const updatedStatus = stepsData.map((step) =>
          step.title === "Наслаждаться арендой" ? "Насладиться" : "В процессе"
        );
        setCardsStatus(updatedStatus);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cardsStatus, stepsData]);

  return (
    <div className={styles.steps}>
      <span className={styles.steps__title}>Просто и быстро</span>
      <span className={styles.steps__subtitle}>
        Всего 5 действий от заветной аренды
      </span>
      <div className={styles.steps__cards}>
        {stepsData.map((step, index) => (
          <React.Fragment key={index}>
            <div
              id={`card-${index}`}
              className={`${styles.steps__card} ${
                cardsStatus[index] === "Пройдено" ||
                cardsStatus[index] === "Насладиться"
                  ? ""
                  : ""
              }`}
            >
              <LineItem status={cardsStatus[index] || step.status} />
              <CardItem
                title={step.title}
                status={cardsStatus[index] || step.status}
                description={step.description}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepsInfo;
