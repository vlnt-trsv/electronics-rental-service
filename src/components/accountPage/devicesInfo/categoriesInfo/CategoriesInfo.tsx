import { Link } from "react-router-dom";
import styles from "./CategoriesInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem.tsx";
import { setSelectedCategory } from "@/redux/slices/categoriesSlice.tsx";
import getCategoryForm from "./getCategoryForm.tsx";
import { useGetCategoriesQuery } from "@/redux/slices/api/api.tsx";

const CategoriesInfo = () => {
  const dispatch = useDispatch();
  
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  // console.log(categories, isError, isLoading);

  const products = useSelector((state: any) => state.products);


  const handleCategoryClick = (category: any) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className={styles.categories}>
      <div className={styles.categories__cards}>
        {isLoading ? (
          <p>Loading categories...</p>
        ) : isError ? (
          <p>Error loading categories</p>
        ) : (
          categories?.map((category: any) => {
            const productCount = products[category.deviceCount]?.length || 0;
            const categoryWord = getCategoryForm(category.name, productCount);
            return (
              <Link
                className={styles.categories__link}
                onClick={() => handleCategoryClick(category)}
                to={category.name}
                key={category.name}
              >
                <CardItem
                  title={category.name}
                  subtitle={category.subtitle}
                  description={`В наличии ${productCount} ${categoryWord}`}  // TODO: add description
                  imageUrl={category.imageUrl}
                  altText={category.altText}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CategoriesInfo;
