import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  const showBreadcrumbs = pathnames.length > 1; // Проверяем, есть ли пути

  return (
    <div className={styles.breadcrumbs}>
      {showBreadcrumbs ? (
        <>
          {pathnames.map((_name, index) => {
            const decodedName = decodeURIComponent(pathnames[index]); // Декодируем имя
            const breadcrumbPath = `/${pathnames
              .slice(0, index + 1)
              .join("/")}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <span key={breadcrumbPath}> {decodedName} </span>
            ) : (
              <span key={breadcrumbPath}>
                <Link to={breadcrumbPath}>{decodedName}</Link>
                {" > "}
              </span>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
