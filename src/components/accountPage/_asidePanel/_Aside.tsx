import { useCallback, useState } from "react";
import styles from "./_Aside.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsArrowDownLeftSquareFill } from "react-icons/bs";
import {
  useGetRentalQuery,
  useGetUserByIdQuery,
  useLogoutMutation,
} from "@/shared/api/api";
import Cookies from "js-cookie";

import moprh from "@/shared/assets/imgs/morph.gif";

const _Aside = () => {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = useState(false);
  const userId = JSON.parse(Cookies.get("connect.user") || "");

  const [logout] = useLogoutMutation();

  const { data: rental } = useGetRentalQuery(userId._id);
  const { data: userData } = useGetUserByIdQuery(userId._id);

  const toggleMoreInfo = useCallback(() => {
    setMoreInfo((prevMoreInfo) => !prevMoreInfo);
  }, []);

  const handleLogout = async () => {
    navigate("/enterPage");
    await logout({});
    Cookies.remove("connect.user");
    Cookies.remove("connect.sid");
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__header}>
        <div className={styles["aside__profile"]}>
          <div className={styles["aside__avatar"]}>
            <div className={styles["aside__avatar-image"]}>
              <img className={styles["image"]} src={moprh} alt="" />
            </div>
            <div className={styles["aside__user-info"]}>
              <div className={styles["username"]}>
                <span className={styles["name"]}>
                  {`${userData?.user?.firstName || "null"} ${
                    userData?.user?.lastName || "null"
                  }`}
                </span>
                <span className={styles["nickname"]}>
                  @{userData?.user?.nickname || "null"}
                </span>
              </div>
              <span className={styles["status"]}>
                Ваш статус: {userData?.user?.status || "null"}
              </span>
            </div>
            <BsArrowDownLeftSquareFill
              onClick={toggleMoreInfo}
              className={`${styles.aside__dropdown} ${
                moreInfo
                  ? styles["aside__dropdown--flipped180"]
                  : styles["aside__dropdown--flipped0"]
              }`}
            />
          </div>
          <div
            className={`${styles["aside__actions"]} ${
              moreInfo ? styles["aside__actions-expanded"] : ""
            }`}
          >
            <div className={styles["aside__info"]}>
              <div className={styles["aside__info-item"]}>
                Подписки: {rental?.count || "0"}
              </div>
              <div className={styles["aside__info-item"]}>
                Бонусный счёт: {userData?.user?.bonus || "null"} ₽
              </div>
            </div>
            <Link
              className={styles["aside__button-second"]}
              to={"personalDataInfo"}
            >
              {<RiAccountCircleFill className={styles.aside__icon} />}{" "}
              Персональные данные
            </Link>
            {/* <Link to={"bankInfo"} className={styles["aside__button-second"]}>
              {card}Банковские карты
            </Link> */}
            <Link
              to={"notificationInfo"}
              className={styles["aside__button-second"]}
            >
              {<RiSettings3Fill className={styles.aside__icon} />}Настройки
              уведомлений
            </Link>
            <Link to={"doc1"} className={styles["aside__link"]}>
              Договор на использование сервиса
            </Link>
            <Link to={"doc2"} className={styles["aside__link"]}>
              Политика конфиденциальности
            </Link>
            <Link to={"doc3"} className={styles["aside__link"]}>
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>
        <nav className={styles["aside__navigation"]}>
          <NavLink to={"devices"} className={styles["aside__button-nav"]}>
            Девайсы
          </NavLink>
          <NavLink to={"subs"} className={styles["aside__button-nav"]}>
            Подписки
          </NavLink>
          <NavLink to={"payments"} className={styles["aside__button-nav"]}>
            Платежи
          </NavLink>
          <NavLink to={"contacts"} className={styles["aside__button-nav"]}>
            Контакты
          </NavLink>
          <NavLink to={"faq"} className={styles["aside__button-nav"]}>
            Вопросы & Ответы
          </NavLink>
          <NavLink to={"*"} className={styles["aside__button-nav"]}>
            ?
          </NavLink>
        </nav>
      </div>
      <div className={styles.aside__footer}>
        <div className={styles["aside__exit"]}>
          <IoExitOutline
            className={styles["aside__exit-icon"]}
            onClick={handleLogout}
          />
        </div>
      </div>
    </aside>
  );
};

export default _Aside;
