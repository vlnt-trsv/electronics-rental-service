const getCategoryForm = (category: string, count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
  
    const checkOne = lastDigit === 1 && lastTwoDigits !== 11;
    const checkTwoToFour = lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20);
  
    switch (category) {
      case "console":
        if (checkOne) return "приставка";
        else if (checkTwoToFour) return "приставки";
        else return "приставок";
  
      case "projector":
        if (checkOne) return "проектор";
        else if (checkTwoToFour) return "проектора";
        else return "проекторов";
  
      case "laptop":
        if (checkOne) return "ноутбук";
        else if (checkTwoToFour) return "ноутбука";
        else return "ноутбуков";
  
      case "speaker":
        if (checkOne) return "колонка";
        else if (checkTwoToFour) return "колонки";
        else return "колонок";
  
      default:
        return category;
    }
  };
  
  export default getCategoryForm;
  