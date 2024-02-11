import { useCallback, useState } from "react";
import styles from "./_Aside.module.scss";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { ApiContext } from "@/context/ApiProvider.jsx";
import { useSelector } from "react-redux";
import { IoMdExit } from "react-icons/io";

const _Aside = () => {
  const data = useContext(ApiContext);
  // console.log(data);
  const [moreInfo, setMoreInfo] = useState(false);

  const { subscriptions, subscriptionFilter } = useSelector(
    (state) => state.subs
  );

  const pen = (
    <div className={styles.svg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M14.0026 8.00061C13.8258 8.00061 13.6562 8.07085 13.5312 8.19587C13.4062 8.3209 13.3359 8.49047 13.3359 8.66728V12.6673C13.3359 12.8441 13.2657 13.0137 13.1407 13.1387C13.0157 13.2637 12.8461 13.3339 12.6693 13.3339H3.33594C3.15913 13.3339 2.98956 13.2637 2.86453 13.1387C2.73951 13.0137 2.66927 12.8441 2.66927 12.6673V3.33394C2.66927 3.15713 2.73951 2.98756 2.86453 2.86254C2.98956 2.73752 3.15913 2.66728 3.33594 2.66728H7.33594C7.51275 2.66728 7.68232 2.59704 7.80734 2.47201C7.93237 2.34699 8.0026 2.17742 8.0026 2.00061C8.0026 1.8238 7.93237 1.65423 7.80734 1.52921C7.68232 1.40418 7.51275 1.33394 7.33594 1.33394H3.33594C2.8055 1.33394 2.2968 1.54466 1.92172 1.91973C1.54665 2.2948 1.33594 2.80351 1.33594 3.33394V12.6673C1.33594 13.1977 1.54665 13.7064 1.92172 14.0815C2.2968 14.4566 2.8055 14.6673 3.33594 14.6673H12.6693C13.1997 14.6673 13.7084 14.4566 14.0835 14.0815C14.4586 13.7064 14.6693 13.1977 14.6693 12.6673V8.66728C14.6693 8.49047 14.599 8.3209 14.474 8.19587C14.349 8.07085 14.1794 8.00061 14.0026 8.00061ZM4.0026 8.50728V11.3339C4.0026 11.5108 4.07284 11.6803 4.19787 11.8053C4.32289 11.9304 4.49246 12.0006 4.66927 12.0006H7.49594C7.58368 12.0011 7.67065 11.9843 7.75188 11.9511C7.8331 11.9179 7.90698 11.8691 7.96927 11.8073L12.5826 7.18728L14.4759 5.33394C14.5384 5.27197 14.588 5.19823 14.6219 5.11699C14.6557 5.03576 14.6731 4.94862 14.6731 4.86061C14.6731 4.7726 14.6557 4.68547 14.6219 4.60423C14.588 4.52299 14.5384 4.44925 14.4759 4.38728L11.6493 1.52728C11.5873 1.46479 11.5136 1.4152 11.4323 1.38135C11.3511 1.3475 11.2639 1.33008 11.1759 1.33008C11.0879 1.33008 11.0008 1.3475 10.9196 1.38135C10.8383 1.4152 10.7646 1.46479 10.7026 1.52728L8.8226 3.41394L4.19594 8.03394C4.13415 8.09624 4.08527 8.17011 4.05209 8.25134C4.01891 8.33256 4.0021 8.41954 4.0026 8.50728ZM11.1759 2.94061L13.0626 4.82728L12.1159 5.77394L10.2293 3.88728L11.1759 2.94061ZM5.33594 8.78061L9.28927 4.82728L11.1759 6.71394L7.2226 10.6673H5.33594V8.78061Z"
          fill="#EAEAEA"
        />
      </svg>
    </div>
  );
  const card = (
    <div className={styles.svg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.3359 5.33268H2.66927V3.99935H13.3359V5.33268ZM13.3359 11.9993H2.66927V6.66602H8.0026H13.3359V11.9993ZM13.3359 2.66602H2.66927C1.92927 2.66602 1.33594 3.25935 1.33594 3.99935V11.9993C1.33594 12.353 1.47641 12.6921 1.72646 12.9422C1.97651 13.1922 2.31565 13.3327 2.66927 13.3327H13.3359C13.6896 13.3327 14.0287 13.1922 14.2787 12.9422C14.5288 12.6921 14.6693 12.353 14.6693 11.9993V3.99935C14.6693 3.25935 14.0693 2.66602 13.3359 2.66602Z"
          fill="#EAEAEA"
        />
      </svg>
    </div>
  );
  const setting = (
    <div className={styles.svg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4.73393 4.132L5.01522 4.30932L5.28752 4.11849C5.84199 3.72991 6.48301 3.45742 7.17578 3.33559L7.50328 3.278L7.5768 2.9537L7.90221 1.51839H8.10094L8.42627 2.95343L8.49982 3.27783L8.82745 3.33535C9.52057 3.45703 10.1619 3.72952 10.7167 4.11822L10.989 4.30899L11.2703 4.13169L12.5153 3.34678L12.6559 3.4873L11.8709 4.73247L11.6936 5.01372L11.8844 5.28601C12.2729 5.8406 12.5454 6.48172 12.667 7.17456L12.7245 7.50217L13.0489 7.57571L14.4839 7.90103V8.09976L13.0488 8.42511L12.7245 8.49864L12.6669 8.8262C12.5451 9.51916 12.2726 10.1604 11.8839 10.7149L11.6931 10.9872L11.8704 11.2685L12.6553 12.5137L12.5148 12.6542L11.2694 11.8691L10.9882 11.6919L10.7159 11.8826C10.1614 12.271 9.52028 12.5434 8.82742 12.6651L8.49981 12.7226L8.42627 13.047L8.10094 14.482H7.90221L7.5768 13.0466L7.50328 12.7223L7.17577 12.6647C6.48328 12.5429 5.84251 12.2706 5.28819 11.8823L5.01591 11.6915L4.73467 11.8688L3.48923 12.6539L3.3487 12.5134L4.13376 11.2681L4.31106 10.9868L4.12029 10.7145C3.7318 10.16 3.45939 9.51899 3.33764 8.82625L3.28007 8.49871L2.95573 8.42518L1.52034 8.09976V7.90103L2.95565 7.57564L3.28002 7.5021L3.33756 7.17451C3.45923 6.48187 3.73152 5.84095 4.11984 5.2865L4.31054 5.01423L4.13328 4.73303L3.34814 3.48755L3.48868 3.34702L4.73393 4.132ZM8.00219 11.3217C9.83672 11.3217 11.3239 9.83455 11.3239 8.00002C11.3239 6.16549 9.83672 4.6783 8.00219 4.6783C6.16765 4.6783 4.68046 6.16549 4.68046 8.00002C4.68046 9.83455 6.16765 11.3217 8.00219 11.3217ZM10.3239 8.00002C10.3239 9.28227 9.28444 10.3217 8.00219 10.3217C6.71993 10.3217 5.68046 9.28227 5.68046 8.00002C5.68046 6.71777 6.71993 5.6783 8.00219 5.6783C9.28443 5.6783 10.3239 6.71777 10.3239 8.00002ZM8.00219 10.2745C9.25832 10.2745 10.2766 9.25616 10.2766 8.00002C10.2766 6.74388 9.25833 5.72557 8.00219 5.72557C6.74604 5.72557 5.72774 6.74388 5.72774 8.00002C5.72774 9.25616 6.74605 10.2745 8.00219 10.2745Z"
          stroke="#EAEAEA"
        />
      </svg>
    </div>
  );
  const exit = <IoMdExit />;

  const toggleMoreInfo = useCallback(() => {
    setMoreInfo((prevMoreInfo) => !prevMoreInfo);
  }, []);

  return (
    <aside className={styles.aside}>
      <div className={styles["aside__profile"]}>
        <div className={styles["aside__avatar"]}>
          <div className={styles["aside__avatar-image"]}>
            <img className={styles["image"]} src="" alt="" />
          </div>
          <div className={styles["aside__user-info"]}>
            <div className={styles["username"]}>
              <span className={styles["name"]}>{data?.name || "null"}</span>
              <span className={styles["nickname"]}>
                @{data?.username || "null"}
              </span>
            </div>
            <span className={styles["status"]}>
              Ваш статус: {data?.status || "null"}
            </span>
          </div>
        </div>
        <button onClick={toggleMoreInfo} className={styles["aside__dropdown"]}>
          Иная информация
        </button>
        <div
          className={`${styles["aside__actions"]} ${
            moreInfo ? styles["aside__actions-expanded"] : ""
          }`}
        >
          <div className={styles["aside__info"]}>
            <div className={styles["aside__info-item"]}>
              Подписки: {subscriptions.length || "null"}
            </div>
            <div className={styles["aside__info-item"]}>
              Бонусный счёт: {data?.bonus || "null"} ₽
            </div>
          </div>
          <Link
            className={styles["aside__button-second"]}
            to={"personalDataInfo"}
          >
            {pen}Персональные данные
          </Link>
          <Link to={"bankInfo"} className={styles["aside__button-second"]}>
            {card}Банковские карты
          </Link>
          <Link
            to={"notificationInfo"}
            className={styles["aside__button-second"]}
          >
            {setting}Настройки уведомлений
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
      <div className={styles["aside__exit"]}>
        <img className={styles["aside__exit-img"]} src={exit} alt="" />
      </div>
    </aside>
  );
};

export default _Aside;
