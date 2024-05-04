import pageTitles from "./pageTitles";

const getPageTitle = (pathname: string) => {
  const pathSegments = pathname.split("/").filter(Boolean);

  // Проходим по каждому шаблону в pageTitles
  for (let pathTemplate in pageTitles) {
    const templateSegments = pathTemplate.split("/").filter(Boolean);

    if (pathSegments.length === templateSegments.length) {
      let isMatch = true;
      const dynamicValues = {};

      for (let i = 0; i < templateSegments.length; i++) {
        if (templateSegments[i].startsWith(":")) {
          const paramName = templateSegments[i].slice(1);
          dynamicValues[paramName] = pathSegments[i];
        } else if (templateSegments[i] !== pathSegments[i]) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        let title = pageTitles[pathTemplate];
        for (let key in dynamicValues) {
          title = title.replace(`:${key}`, dynamicValues[key]);
        }
        return title;
      }
    }
  }

  return "Undefined";
};

export default getPageTitle;
