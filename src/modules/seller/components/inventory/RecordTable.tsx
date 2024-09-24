import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import DataTable, { ColumnDef } from "../../ui/DataTable";
import { fetchRecords, RecordRow } from "../../api/Record";
import ButtonText from "../../../../shared/ui/ButtonText";
import SpinnerComponent from "../../../../shared/ui/Spinner";
import Table from "../../../../shared/ui/Table";
import toast from "react-hot-toast";

const columns: ColumnDef<RecordRow>[] = [
  { field: "name", headerName: "Name" },
  { field: "quantity", headerName: "Quantity (kg)" },
  { field: "date", headerName: "Date" },
  { field: "areaCovered", headerName: "Area Covered" },
  { field: "action", headerName: "Action" },
];

interface RecordTableProps {
  title: string;
}

const RecordTable: React.FC<RecordTableProps> = ({ title }) => {
  const { data: records = [], isLoading: isLoadingRecord } = useQuery({
    queryKey: ["records"],
    queryFn: fetchRecords,
  });

  const navigate = useNavigate();

  const handleViewClick = (row: RecordRow) => {
    navigate("/add-update", {
      state: { row, title, mode: "view" },
    });
    toast(`Viewing details for ${row.name}`);
  };

  const renderRow = (row: RecordRow) => (
    <Table.Row key={row.id}>
      {columns.map((col) => (
        <div key={col.field.toString()}>
          {col.field === "action" ? (
            <ButtonText
              style={{ color: "var(--color-green-600)" }}
              onClick={() => handleViewClick(row)}
            >
              View
            </ButtonText>
          ) : (
            row[col.field]
          )}
        </div>
      ))}
    </Table.Row>
  );

  if (isLoadingRecord) return <SpinnerComponent />;

  return <DataTable rows={records} columns={columns} renderRow={renderRow} />;
};

export default RecordTable;
