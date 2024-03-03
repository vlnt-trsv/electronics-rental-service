import { useEffect, useState } from "react";
import styles from "./PaymentsInfo.module.scss";
import Pagination from "./paginationItem/PaginationItem";
import Table from "./tableItem/TableItem";
import { useGetPaymentsQuery } from "@/redux/slices/api/api";
import Cookies from "js-cookie";
import Notice from "@/components/ui/notice/Notice";

const PaymentsInfo = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const userId = JSON.parse(Cookies.get("connect.user"));
  const {
    data: payments,
    isLoading,
    isError,
  } = useGetPaymentsQuery(userId._id);
  console.log("PAYMENTS", payments?.payments);

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

  return (
    <div className={styles.payments}>
      <div className={styles.payments__title}>Платежи</div>
      {paginatedPayments.length === 0 ? (
        <Notice
          data={payments?.payments || []}
          isLoading={isLoading}
          isError={isError}
          message="Нет совершенных платежей"
        />
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
