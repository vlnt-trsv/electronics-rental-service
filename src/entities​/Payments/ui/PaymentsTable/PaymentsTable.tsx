import React from "react"; // Не забудьте импортировать React
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/shared/ui/table/table";

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
  const totalAmount = data.reduce(
    (total, payment) => total + payment.amount, // Используйте payment вместо payments для единообразия
    0
  );

  // Функция для усечения _id от 18 до 24 символов
  const shortenId = (id: string) => {
    return id.substring(18, 24).toUpperCase();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Номер заказа</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Способ оплаты</TableHead>
          <TableHead>Сумма</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((payment) => (
          <TableRow key={payment._id}>
            <TableCell>{shortenId(payment._id)}</TableCell>
            <TableCell>{payment.status || "null"}</TableCell>
            <TableCell>{payment.rental?.deliveryMethod || "null"}</TableCell>
            <TableCell>{payment.amount.toFixed(2)} ₽</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Общая сумма</TableCell>
          <TableCell>{totalAmount.toFixed(2)} ₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableItem;
