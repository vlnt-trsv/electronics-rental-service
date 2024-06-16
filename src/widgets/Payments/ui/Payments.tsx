import { useEffect, useState } from "react";
import styles from "./Payments.module.scss";
import { PaymentsTable, PaymentsPagination } from "@/entities​";
import { useGetPaymentsQuery } from "@/shared/api/api";
import Cookies from "js-cookie";
import Notice from "@/shared/ui/notice/Notice";

export default function Payments() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const {
    data: payments,
    isLoading,
    isError,
  } = useGetPaymentsQuery(userId._id);

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
      {paginatedPayments.length === 0 ? (
        <Notice
          data={payments?.payments || []}
          isLoading={isLoading}
          isFetching={false}
          isError={isError}
          message="Нет совершенных платежей"
        />
      ) : (
        <>
          <div className={styles.payments__table}>
            <PaymentsTable data={paginatedPayments} />
          </div>
          <div className={styles.payments__pagination}>
            <PaymentsPagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
