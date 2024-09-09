import React from "react";
import Table from "../../../ui/Table";
import { DataGridRow, OrderTableProps, ColumnDef } from "./Types";
import { useNavigate } from "react-router-dom";

// Column definitions
const columns: ColumnDef[] = [
  { field: "customerName", headerName: "Customer" },
  { field: "product", headerName: "Product" },
  { field: "orderId", headerName: "Order ID" },
  { field: "quantity", headerName: "Quantity (kg)" },
  { field: "price", headerName: "Total Price" },
  { field: "dateOfOrder", headerName: "Date of Order" },
];

const OrderTable: React.FC<OrderTableProps> = ({ rows }) => {
  const navigate = useNavigate();

  // Function to render each row
  const renderRow = (row: DataGridRow) => {
    const handleRowClick = () => {
      // Only navigate for pending orders
      navigate(`/order/${row.orderId}`);
    };

    return (
      <Table.Row
        key={row.orderId}
        onClick={handleRowClick} // Apply onClick for all rows since we already filtered for pending
      >
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
