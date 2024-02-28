import { useEffect, useState } from "react";
import styles from "./PaymentsInfo.module.scss";
import Pagination from "./paginationItem/PaginationItem";
import Table from "./tableItem/TableItem";
import { useGetPaymentsQuery } from "@/redux/slices/api/api";
import Cookies from "js-cookie";

const PaymentsInfo = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const userId = JSON.parse(Cookies.get("connect.user"));
  const {
    data: payments,
    isLoading,
    isError,
  } = useGetPaymentsQuery(userId._id);
  console.log(payments?.payments[0]);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  // Инициализация totalPages и paginatedSubscriptions после загрузки данных
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedPayments, setPaginatedPayments] = useState([]);

  useEffect(() => {
    if (payments?.payments && Array.isArray(payments?.payments)) {
      setTotalPages(Math.ceil(payments?.payments.length / itemsPerPage));
      setPaginatedPayments(
        payments?.payments.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
    }
  }, [payments, currentPage, itemsPerPage]);

  const notice = () => {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    if (isError || !Array.isArray(payments?.payments)) {
      return <div>Ошибка при загрузке данных</div>;
    }
    return <div>Нет совершенных платежей</div>;
  };

  return (
    <div className={styles.payments}>
      <div className={styles.payments__title}>Платежи</div>
      {!Array.isArray(payments?.payments) || paginatedPayments.length === 0 ? (
        <div className={styles.payments__wrapper}>
          <div className={styles.payments__noPayments}>{notice()}</div>
        </div>
      ) : (
        <>
          <div className={styles.payments__table}>
            <Table data={paginatedPayments} />
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
