import { useState } from "react";
import styles from "./Aside.module.scss";
import { useNavigate } from "react-router-dom";
import {
  ExitIcon,
  SettingIcon,
  AccountIcon,
  ArrowDownLeftIcon,
} from "@/shared/assets";
import {
  useGetRentalQuery,
  useGetUserByIdQuery,
  useLogoutMutation,
} from "@/shared/api/api";
import Cookies from "js-cookie";
import Avatar from "./Avatar/Avatar";
import Text from "./Text";
import Button from "./Button/Button";

export default function Aside({ hideAside }: any) {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = useState(false);
  const userId = JSON.parse(Cookies.get("connect.user") || "{}");

  const [logout] = useLogoutMutation();

  const { data: rental } = useGetRentalQuery(userId._id);
  const { data: userData } = useGetUserByIdQuery(userId._id);

  const handleLogout = async () => {
    navigate("/enterPage");
    await logout({});
    Cookies.remove("connect.user");
    Cookies.remove("connect.sid");
    localStorage.clear();
    window.location.reload();
  };

  const primary: any = [
    {
      children: "Девайсы",
      location: "devices",
    },
    {
      children: "Подписки",
      location: "subs",
    },
    {
      children: "Платежи",
      location: "payments",
    },
    {
      children: "Контакты",
      location: "contacts",
    },
    {
      children: "Вопросы & Ответы",
      location: "faq",
    },
    {
      children: "?",
      location: "*",
    },
  ];

  const secondary: any = [
    {
      children: "Персональные данные",
      location: "personalDataInfo",
      icon: <AccountIcon />,
    },
    {
      children: "Настройки уведомлений",
      location: "notificationInfo",
      icon: <SettingIcon />,
    },
  ];

  const tertiary: any = [
    {
      children: "Договор на использование сервиса",
      location: "doc1",
    },
    {
      children: "Политика конфиденциальности",
      location: "doc2",
    },
    {
      children: "Согласие на обработку персональных данных",
      location: "doc3",
    },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__header}>
        <div className={styles["aside__profile"]}>
          <div className={styles["aside__user"]}>
            <Avatar size={100} />
            <div className={styles["aside__user-info"]}>
              <div className={styles["username"]}>
                <Text>{`${userData?.user?.firstName || "Имя"} ${
                  userData?.user?.lastName || "Фамилия"
                }`}</Text>
                <Text style={{ opacity: "0.5" }}>
                  @{userData?.user?.nickname || "nickname"}
                </Text>
              </div>
              {/* <Text>Ваш статус: {userData?.user?.status || "null"}</Text> */}
            </div>
            <ArrowDownLeftIcon
              onClick={() => setMoreInfo((prevMoreInfo) => !prevMoreInfo)}
              className={`${styles.aside__dropdown} ${
                moreInfo
                  ? styles["aside__dropdown--flipped90"]
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
                Бонусный счёт: {userData?.user?.bonus || "0"} ₽
              </div>
            </div>
            {secondary?.map((s: any) => {
              return (
                <Button
                  key={s.children}
                  children={s.children}
                  location={s.location}
                  type="secondary"
                  justify="left"
                  icon={s.icon}
                  onClick={() => hideAside()}
                />
              );
            })}
            {tertiary?.map((t: any) => {
              return (
                <Button
                  key={t.children}
                  children={t.children}
                  location={t.location}
                  type="tertiary"
                  justify="left"
                  onClick={() => hideAside()}
                />
              );
            })}
          </div>
        </div>
        <nav className={styles["aside__navigation"]}>
          {primary?.map((p: any) => {
            return (
              <Button
                key={p.children}
                children={p.children}
                location={p.location}
                type="primary"
                justify="center"
                onClick={() => hideAside()}
              />
            );
          })}
        </nav>
      </div>
      <div className={styles.aside__footer}>
        <div onClick={handleLogout} className={styles["aside__exit"]}>
          <ExitIcon className={styles["aside__exit-icon"]} />
          <span>Выход</span>
        </div>
      </div>
    </aside>
  );
}
