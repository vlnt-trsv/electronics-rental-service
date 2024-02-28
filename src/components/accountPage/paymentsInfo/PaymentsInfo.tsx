// PaymentsInfo.tsx
import { useState, useEffect } from "react";
import styles from "./PaymentsInfo.module.scss";
import Pagination from "./paginationItem/PaginationItem"; // Импортируем компонент Pagination
import Table from "./tableItem/TableItem"; // Импортируем компонент Table

const PaymentsInfo = () => {
  const [vision, setVision] = useState(false);
  const [isCardExists] = useState(true);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
  ];

  useEffect(() => {
    if (isCardExists) {
      setVision(false);
    } else {
      setVision(true);
    }
  }, []);

  const itemsPerPage = 5; // Количество элементов на одной странице
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const paginatedInvoices = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.payments}>
      <div className={styles.payments__title}>Платежи</div>
      {invoices.length === 0 ? (
        <div className={styles.payments__wrapper}>
          <div className={styles.payments__noPayments}>
            У тебя пока нет совершенных платежей
          </div>
        </div>
      ) : (
        <>
          <div className={styles.payments__table}>
            <Table data={paginatedInvoices} />
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
