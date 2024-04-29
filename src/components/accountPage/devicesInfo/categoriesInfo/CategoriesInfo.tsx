import { Link } from "react-router-dom";
import styles from "./CategoriesInfo.module.scss";
import CardItem from "../CardItem.tsx";
import getCategoryForm from "./getCategoryForm.tsx";
import { useGetCategoriesQuery } from "@/shared/api/api.tsx";
import Notice from "@/shared/ui/notice/Notice.tsx";
import _console from "@/shared/assets/imgs/_console.jpg";

const CategoriesInfo = () => {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();

  const handleCategoryClick = (category: any) => {
    localStorage.setItem("selectedCategory", JSON.stringify({ ...category }));
  };

  // Проверяем, есть ли категории в данных
  const hasCategories = categories && categories.length > 0;

  const getImageUrl = (fileName: string) => {
    return `http://localhost:8000/${fileName}`;
  };

  return (
    <div className={styles.categories}>
      {!hasCategories ? (
        <Notice
          data={categories}
          isLoading={isLoading}
          isError={isError}
          message="Нет доступных категорий"
        />
      ) : (
        <div className={styles.categories__cards}>
          {categories?.map((category: any) => {
            return (
              <Link
                className={styles.categories__link}
                onClick={() => handleCategoryClick(category)}
                to={{
                  pathname: category.engName,
                  // search: `?${category._id}`,
                }}
                // to={category.name}
                key={category.name}
              >
                <CardItem
                  title={category.name}
                  subtitle={category.subtitle}
                  description={`В наличии`} // TODO: add description
                  imageUrl={getImageUrl(category.categoryImage)}
                  altText={category.altText}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CategoriesInfo;
