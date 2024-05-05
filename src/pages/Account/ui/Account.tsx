import { Aside, Header, Main } from "@/widgets/index";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Preloader from "@/shared/ui/preloader/Preloader";
import { useGetUserByIdQuery } from "@/shared/api/api";
import Cookies from "js-cookie";
import ViewGrid from "./ViewGrid/ViewGrid";

export default function Account() {
  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserByIdQuery(userId._id);

  // Определяем, загрузились ли данные
  const isDataLoaded = !isLoading && !isError && userData;

  return (
    <>
      <Preloader isDataLoaded={isDataLoaded} isLoading={isLoading} />
      {isDataLoaded && (
        <>
          <ViewGrid type="container">
            <ViewGrid type="header">
              <Header />
            </ViewGrid>
            <ViewGrid type="aside">
              <Aside />
            </ViewGrid>
            <ViewGrid type="main">
              <Main />
            </ViewGrid>
          </ViewGrid>
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
    </>
  );
}
