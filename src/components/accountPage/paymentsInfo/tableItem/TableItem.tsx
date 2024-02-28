import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table/table";

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

const TableItem: React.FC<TableProps> = ({ data }) => {
  const totalAmount = data.reduce(
    (total, payments) => total + payments.amount,
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
        {data.map((payments) => (
          <TableRow key={payments?._id}>
            <TableCell>{shortenId(payments._id)}</TableCell>
            <TableCell>{payments?.status || "null"}</TableCell>
            <TableCell>{payments?.rental?.deliveryMethod || "null"}</TableCell>
            <TableCell>{payments?.amount?.toFixed(2)} ₽</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Общая сумма</TableCell>
          <TableCell>{totalAmount?.toFixed(2)} ₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableItem;
