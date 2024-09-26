import React from "react";
import Table from "../../../shared/ui/Table";

export interface ColumnDef<T> {
  field: keyof T;
  headerName: string;
}

interface DataTableProps<T> {
  rows: T[];
  columns: ColumnDef<T>[];
  renderRow: (row: T) => React.ReactNode;
}

const DataTable = <T,>({ rows, columns, renderRow }: DataTableProps<T>) => {
  console.log("DataTable Rows:", rows);
  console.log("DataTable Columns:", columns);

  return (
    <Table columns={`repeat(${columns.length}, 1fr)`}>
      <Table.Header>
        {columns.map((col) => (
          <div key={col.field.toString()}>{col.headerName}</div>
        ))}
      </Table.Header>
      <Table.Body data={rows} render={renderRow} />
      <Table.Footer>{/* Optional footer content */}</Table.Footer>
    </Table>
  );
};

export default DataTable;
