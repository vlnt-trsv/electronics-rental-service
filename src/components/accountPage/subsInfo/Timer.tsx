import { useState, useEffect } from "react";

const Timer = ({ endDate }: any) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    } else {
      return "Аренда завершена";
    }
  }

  return <span>{timeLeft}</span>;
};

export default Timer;
