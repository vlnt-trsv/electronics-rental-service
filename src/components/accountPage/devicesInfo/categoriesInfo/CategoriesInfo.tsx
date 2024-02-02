import { Link } from "react-router-dom";
import styles from "./CategoriesInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem.tsx";
import { setSelectedCategory } from "@/redux/action/categoriesSlice.tsx";

const CategoriesInfo = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(
      setSelectedCategory({
        id: category.id,
        name: category.name,
        title: category.title,
      })
    );
  };

  return (
    <div className={styles.categories}>
      <div className={styles.categories__cards}>
        {categories.map((category) => (
          <Link
            onClick={() => handleCategoryClick(category)}
            to={category.name}
            key={category.name}
          >
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
    </div>
  );
};

export default CategoriesInfo;
