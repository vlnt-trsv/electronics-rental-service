import shortid from "shortid";
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
  invoice: string;
  status: string;
  deliveryMethod: string;
  totalPrice: number;
  totalAmount: number;
}

type TableProps = {
  data: Invoice[];
};

const generateInvoiceNumber = () => {
  return shortid.generate();
};

const TableItem: React.FC<TableProps> = ({ data }) => {
  const totalAmount = data.reduce(
    (total, invoice) => total + invoice.totalPrice,
    0
  );
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
        {data.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{generateInvoiceNumber()}</TableCell>
            <TableCell>{invoice.status || "null"}</TableCell>
            <TableCell>{invoice.deliveryMethod || "null"}</TableCell>
            <TableCell>{parseFloat(invoice.totalPrice)} ₽</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Общая сумма</TableCell>
          <TableCell>{parseFloat(totalAmount)} ₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableItem;
