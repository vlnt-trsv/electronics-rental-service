import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/shared/ui/table/table";
import { getShortenId } from "@/shared/lib";

interface Invoice {
  _id: string;
  amount: number;
  invoice: string;
  rental: {
    deliveryMethod: string;
  };
  status: string;
  deliveryMethod: string;
  totalPrice: number;
  totalAmount: number;
}

type TableProps = {
  data: Invoice[];
};

// Правильное объявление компонента с использованием стрелочной функции
const TableItem: React.FC<TableProps> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const totalAmount = data.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Номер заказа</TableHead>
          <TableHead>Статус</TableHead>
          {windowWidth >= 450 && <TableHead>Способ доставки</TableHead>}
          <TableHead>Сумма</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((payment) => (
          <TableRow key={payment._id}>
            <TableCell>№{getShortenId(payment._id)}</TableCell>
            <TableCell>{payment.status || "null"}</TableCell>
            {windowWidth >= 450 && (
              <TableCell>{payment.rental?.deliveryMethod || "null"}</TableCell>
            )}
            <TableCell>{payment.amount} ₽</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={windowWidth >= 450 ? 3 : 2}>
            Общая сумма
          </TableCell>
          <TableCell>{totalAmount} ₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableItem;
