import styles from "./Background.module.scss";

const Background = () => {
  // Массив с позициями для каждого кружка
  const settings = [
    {
      left: "-5%",
      top: "50%",
      width: "500px",
      height: "500px",
      background: "#f77f00",
    },
    {
      left: "80%",
      top: "30%",
      width: "600px",
      height: "600px",
      background: "#0059FF",
    },
    {
      left: "30%",
      top: "300%",
      width: "700px",
      height: "700px",
      background: "#73C344",
    },
  ];

  // Создаем массив из кружков с разными позициями
  const circles = settings.map((setting, i) => (
    <div
      key={i}
      className={styles.blurCircle}
      style={{
        background: setting.background,
        width: setting.width,
        height: setting.height,
        left: setting.left,
        top: setting.top,
        animationDelay: `${i * 5}s`, // Разное задержка для каждого кружка
      }}
    />
  ));

  return <div className={styles.background}>{circles}</div>;
};

export default Background;
