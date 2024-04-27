import Header from "./_header/_Header";
import Aside from "./_asidePanel/_Aside";
import Main from "./_main/_Main";
import { ToastContainer, Slide } from "react-toastify";
import styles from "./AccountInfo.module.scss";
import "react-toastify/dist/ReactToastify.min.css";
import Preloader from "../ui/preloader/Preloader";
import { useGetUserByIdQuery } from "@/shared/api/api";
import Cookies from "js-cookie";

const AccountInfo = () => {
  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserByIdQuery(userId._id);

  // Определяем, загрузились ли данные
  const isDataLoaded = !isLoading && !isError && userData;

  return (
    <div className={`${styles.account} grid-container`}>
      <Preloader isDataLoaded={isDataLoaded} isLoading={isLoading} />
      {isDataLoaded && (
        <>
          <header className={`${styles.account__header} grid-header`}>
            <Header />
          </header>
          <aside className={`${styles.account__aside} grid-aside`}>
            <Aside />
          </aside>
          <main className={`${styles.account__main} grid-main`}>
            <Main />
          </main>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={5}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        stacked
        pauseOnFocusLoss
        draggable="touch"
        // closeButton={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default AccountInfo;
