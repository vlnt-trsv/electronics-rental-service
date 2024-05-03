// getPageTitle.js
import pageTitles from './pageTitles';

const getPageTitle = (pathname, params) => {
  // Разбиваем путь на сегменты
  const pathSegments = pathname.split('/').filter(Boolean);

  // Проходим по каждому шаблону в pageTitles
  for (let pathTemplate in pageTitles) {
    // Разбиваем шаблон на сегменты
    const templateSegments = pathTemplate.split('/').filter(Boolean);

    // Проверяем, соответствует ли путь шаблону
    if (pathSegments.length === templateSegments.length) {
      let isMatch = true;
      const dynamicValues = {};

      for (let i = 0; i < templateSegments.length; i++) {
        if (templateSegments[i].startsWith(':')) {
          // Это динамический сегмент
          const paramName = templateSegments[i].slice(1);
          dynamicValues[paramName] = pathSegments[i];
        } else if (templateSegments[i] !== pathSegments[i]) {
          // Несоответствие статического сегмента
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        // Формируем заголовок, подставляя динамические значения
        let title = pageTitles[pathTemplate];
        for (let key in dynamicValues) {
          title = title.replace(`:${key}`, dynamicValues[key]);
        }
        return title;
      }
    }
  }

  // Возвращаем заголовок по умолчанию, если не найдено соответствие
  return "Null";
};

export default getPageTitle;