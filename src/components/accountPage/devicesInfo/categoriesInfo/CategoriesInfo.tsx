import { Link } from "react-router-dom";
import styles from "./CategoriesInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem.tsx";
import { setSelectedCategory } from "@/redux/slices/categoriesSlice.tsx";
import getCategoryForm from "./getCategoryForm.tsx";
import { useGetCategoriesQuery } from "@/redux/slices/api/api.tsx";
import Notice from "@/components/ui/notice/Notice.tsx";

const CategoriesInfo = () => {
  const dispatch = useDispatch();

  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  console.log(categories);

  const products = useSelector((state: any) => state.products);

  const handleCategoryClick = (category: any) => {
    dispatch(setSelectedCategory(category));
  };

  // Проверяем, есть ли категории в данных
  const hasCategories = categories && categories.length > 0;

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
            const productCount = products[category.deviceCount]?.length || 0;
            const categoryWord = getCategoryForm(category.name, productCount);
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
                  description={`В наличии ${productCount} ${categoryWord}`} // TODO: add description
                  imageUrl={category.imageUrl}
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
