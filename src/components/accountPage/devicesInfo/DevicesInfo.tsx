import { Outlet, useNavigate } from "react-router-dom";
import styles from "./DevicesInfo.module.scss";
// import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";
import { Button } from "@/components/ui/button";
// import { useSelector } from "react-redux";

const DevicesInfo = () => {
  const navigate = useNavigate();
  const back = (
    <Button size="sm" onClick={() => navigate(-1)}>
      Назад
    </Button>
  );

  return (
    // <DataCheckingContainer>
      <div className={styles.devices}>
        <span className={styles.devices__title}>Девайсы</span> 
        {/* <Breadcrumbs /> */}
        <Outlet />
      </div>
    // </DataCheckingContainer> 
  );
};

// const DataCheckingContainer = ({ children }: any) => {
//   const navigate = useNavigate();
//   const products = useSelector(
//     (state: any) => state.rootReducer.products
//   );

//   // Проверяем, есть ли данные в store
//   if (
//     !products ||
//     Object.keys(products).every(
//       (key) => products[key].length === 0
//     )
//   ) {
//     // Нет данных - перенаправляем на главную страницу
//     navigate("devices");
//     return null;
//   }

//   // Если есть данные, рендерим дочерние компоненты
//   return children;
// };

export default DevicesInfo;
