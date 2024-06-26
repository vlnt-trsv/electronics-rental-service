import { Aside, Header, Main } from "@/widgets/index";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Preloader from "@/shared/ui/preloader/Preloader";
import { useGetUserByIdQuery } from "@/shared/api/api";
import Cookies from "js-cookie";
import ViewGrid from "./ViewGrid/ViewGrid";
import { useEffect, useState } from "react";
import { useWindowResize } from "@/shared/lib";

export default function Account() {
  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserByIdQuery(userId._id);

  // Состояние для видимости aside
  const [asideVisible, setAsideVisible] = useState(() => {
    const savedState = localStorage.getItem("aside_visible");
    return savedState ? JSON.parse(savedState) : false;
  });

  const windowWidth = useWindowResize();

  // Сохранение состояния asideVisible в localStorage
  useEffect(() => {
    localStorage.setItem("aside_visible", JSON.stringify(asideVisible));
  }, [asideVisible]);

  useEffect(() => {
    if (windowWidth > 1280) {
      setAsideVisible(true);
    } else {
      setAsideVisible(false);
    }
  }, [windowWidth]);

  const hideAfterClick = () => {
    if (windowWidth <= 1280) {
      setAsideVisible(false);
    }
  };

  // Определяем, загрузились ли данные
  const isDataLoaded = !isLoading && !isError && userData;

  // Стили для затемнения фона
  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 50,
  };

  return (
    <>
      <Preloader isDataLoaded={isDataLoaded} isLoading={isLoading} />
      {isDataLoaded && (
        <>
          {asideVisible && window.innerWidth <= 1280 && (
            <div style={overlayStyle}></div>
          )}
          <ViewGrid type="container">
            <ViewGrid type="header">
              <Header
                toggleAside={() => setAsideVisible((prev: any) => !prev)}
                isMenuOpen={asideVisible}
              />
            </ViewGrid>
            <ViewGrid type="aside">
              {asideVisible && <Aside hideAside={hideAfterClick} />}
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
