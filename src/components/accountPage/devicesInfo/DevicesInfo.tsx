import { Link, Outlet, useLocation } from "react-router-dom";
import CardItem from "./CardItem.tsx";
import styles from "./DevicesInfo.module.scss";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";

const DevicesInfo = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Показывать категории, если находимся на странице '/accountPage/devices'
    setCategoriesVisible(location.pathname.endsWith("/devices"));
  }, [location.pathname]);

  const categoryNames = [
    {
      name: "Приставки",
      title: "Приставка",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Приставки",
    },
    {
      name: "Проекторы",
      title: "Проекторы",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Проекторы",
    },
    {
      name: "Ноутбуки",
      title: "Ноутбуки",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Ноутбуки",
    },
    {
      name: "Колонки",
      title: "Колонки",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Колонки",
    },
  ];

  const pathParts = location.pathname
    .split("/")
    .map((part) => decodeURIComponent(part));
  const currentCategory = pathParts[pathParts.length - 1]; // Предполагается, что категория - последняя часть URL
  const breadcrumbs = [
    { label: "Девайсы", path: "/accountPage/devices" },
    ...(currentCategory !== "devices"
      ? [
          {
            label: currentCategory,
            path: `/accountPage/devices/${currentCategory}`,
          },
        ]
      : []),
  ];

  return (
    <div className={styles.devices}>
      <span className={styles.devices__title}>Девайсы</span>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={styles.devices__cards}>
        {categoriesVisible &&
          categoryNames.map((category) => (
            <Link to={category.name} key={category.name}>
              <CardItem
                title={category.title}
                subtitle={category.subtitle}
                description={category.description}
                imageUrl={category.imageUrl}
                altText={category.altText}
              />
            </Link>
          ))}
      </div>
      <Outlet />
    </div>
  );
};

export default DevicesInfo;
