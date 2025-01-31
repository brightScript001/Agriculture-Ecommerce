import React from "react";
import Table from "../../../../shared/ui/Table";
import { DataGridRow, OrderTableProps, ColumnDef } from "./OrdersListTypes";
import { useNavigate } from "react-router-dom";

const columns: ColumnDef[] = [
  { field: "customerName", headerName: "Customer" },
  { field: "product", headerName: "Product" },
  { field: "id", headerName: "Order ID" },
  { field: "quantity", headerName: "Quantity (kg)" },
  { field: "price", headerName: "Total Price" },
  { field: "dateOfOrder", headerName: "Date of Order" },
];

const OrderTable: React.FC<OrderTableProps> = ({ rows }) => {
  const navigate = useNavigate();

  const renderRow = (row: DataGridRow) => {
    const handleRowClick = () => {
      navigate(`/seller/order/${row.id}`);
      console.log("Row clicked", row.id);
    };

    return (
      <Table.Row key={row.id} onClick={handleRowClick}>
        {columns.map((col) => (
          <div key={col.field}>{row[col.field]}</div>
        ))}
      </Table.Row>
    );
  };

  return (
    <Table columns="repeat(6, 1fr)">
      <Table.Header>
        {columns.map((col) => (
          <div key={col.field}>{col.headerName}</div>
        ))}
      </Table.Header>
      <Table.Body data={rows} render={renderRow} />
      <Table.Footer>{/* Optional footer content */}</Table.Footer>
    </Table>
  );
};

export default OrderTable;
