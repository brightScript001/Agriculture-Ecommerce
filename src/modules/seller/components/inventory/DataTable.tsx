import React from "react";
import Table from "../../../../shared/ui/Table";

import { ColumnDef, RecordType } from "./RecordTypes";

interface DataTableProps<T extends RecordType> {
  rows: T[];
  columns: readonly ColumnDef<T>[];
  renderRow: (row: T) => React.ReactNode;
}
const DataTable = <T extends RecordType>({
  rows,
  columns,
  renderRow,
}: DataTableProps<T>) => {
  return (
    <Table columns={`repeat(${columns.length}, 1fr)`}>
      <Table.Header>
        {columns.map((col) => (
          <div key={col.field.toString()}>{col.headerName}</div>
        ))}
      </Table.Header>
      <Table.Body
        data={rows}
        render={(row: T) => (
          <Table.Row key={row.name}>{renderRow(row)}</Table.Row>
        )}
      />
      <Table.Footer />
    </Table>
  );
};

export default DataTable;
