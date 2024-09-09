import React from "react";
import {
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Table,
  Paper,
} from "@mui/material";

interface OrderTableProps {
  columns: { field: string; headerName: string; width: number }[];
  rows: { [key: string]: string }[];
}

const OrderTable: React.FC<OrderTableProps> = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field} sx={{ width: `${column.width}px` }}>
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{ width: `${column.width}px` }}
                >
                  {row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
