import { useState } from "react";
import CardItem from "./cardItem/CardItem";
import styles from "./CategoriesInfo.module.scss";
import console from "@/shared/assets/imgs/console.png";

const CategoriesInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsData = [
    { title: "Приставка", subtitle: "от 990 ₽", img: console },
    { title: "Колонки", subtitle: "от 690 ₽", img: console },
    { title: "Проекторы", subtitle: "от 790 ₽", img: console },
    { title: "Ноубуки", subtitle: "от 890 ₽", img: console },
  ];

  // Обработчик для установки активной карточки при наведении
  const handleCardHover = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.categories}>
      <span className={styles.categories__title}>Как же их много</span>
      <span className={styles.categories__subtitle}>
        Достаточно категорий, которые займут ваше время
      </span>
      <div className={styles.categories__card}>
        {cardsData.map((card, index) => (
          <CardItem
            key={index}
            img={card.img}
            title={card.title}
            subtitle={card.subtitle}
            isActive={index === activeIndex}
            onClick={() => handleCardHover(index)}
            onMouseEnter={() => handleCardHover(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesInfo;
