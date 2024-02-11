import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./PaymentsInfo.module.scss";
import Pagination from "./paginationItem/PaginationItem";
import Table from "./tableItem/TableItem";

const PaymentsInfo = () => {
  const subscriptions = useSelector((state) => state.subs.subscriptions);

  // Функция для получения оплаченных подписок
  const getPaidSubscriptions = (subscriptions) => {
    return subscriptions.filter(
      (sub) =>
        sub.status === "Оплачено" ||
        sub.status === "Завершено" ||
        sub.status === "В аренде"
    );
  };

  const paidSubscriptions = getPaidSubscriptions(subscriptions);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(paidSubscriptions.length / itemsPerPage);
  const paginatedSubscriptions = paidSubscriptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(paginatedSubscriptions);

  return (
    <div className={styles.payments}>
      <div className={styles.payments__title}>Платежи</div>
      {paidSubscriptions.length === 0 ? (
        <div className={styles.payments__wrapper}>
          <div className={styles.payments__noPayments}>
            Нет совершенных платежей
          </div>
        </div>
      ) : (
        <>
          <div className={styles.payments__table}>
            <Table data={paginatedSubscriptions} />
          </div>
          <div className={styles.payments__pagination}>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentsInfo;
