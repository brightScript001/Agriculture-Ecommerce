import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { SuppliesRecordListHeader } from "./SuppliesRecordListHeader";
import { SuppliesRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";

interface ButtonListProps {
  onViewRow: (row: SuppliesRecord) => void;
  onDelete: (listName: string) => void;
  onDownload: (listName: string) => void;
}

export const SuppliesRecordListCard: React.FC<ButtonListProps> = ({
  onDelete,
  onDownload,
}) => {
  const navigate = useNavigate();
  const lists = ["Pesticides", "Fertilizers", "Tools"];
  const [activeList, setActiveList] = useState<string | null>(null);
  const [suppliesData] = useState<SuppliesRecord[]>([
    {
      name: "Pesticide A",
      quantityGotten: 10,
      quantityRemaining: 5,
      dateLastApplied: "2024-08-12",
      action: "View",
    },
    {
      name: "Fertilizer B",
      quantityGotten: 20,
      quantityRemaining: 10,
      dateLastApplied: "2024-09-01",
      action: "View",
    },
  ]);

  const handleToggle = (listName: string) => {
    setActiveList(activeList === listName ? null : listName);
  };

  const handleViewRow = (row: SuppliesRecord, listName: string) => {
    navigate(`/supplies-record-form`, { state: { record: row, listName } });
  };

  return (
    <div>
      {lists.map((list) => (
        <div key={list}>
          <div
            style={{
              display: "flex",
              backgroundColor: "var(--color-grey-0)",
              justifyContent: "space-between",
              margin: "1rem 0",
              padding: "20px",
              border: "none",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            <span>{list}</span>
            <ButtonGroup>
              <ButtonText
                style={{ color: "var(--color-green-600)" }}
                onClick={() => handleToggle(list)}
              >
                {activeList === list ? "Close" : "View"}
              </ButtonText>
              <ButtonText
                style={{ color: "var(--color-red-600)" }}
                onClick={() => onDelete(list)}
              >
                Delete
              </ButtonText>
              <ButtonText
                style={{ color: "var(--color-grey-600)" }}
                onClick={() => onDownload(list)}
              >
                Download
              </ButtonText>
            </ButtonGroup>
          </div>
          {activeList === list && (
            <div
              className="card"
              style={{
                marginTop: "1rem",
                backgroundColor: "var(--color-grey-0)",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              <SuppliesRecordListHeader listName={list} />

              <DataTable<SuppliesRecord>
                rows={suppliesData}
                columns={[
                  { field: "name", headerName: "Name" },
                  { field: "quantityGotten", headerName: "Quantity Gotten" },
                  {
                    field: "quantityRemaining",
                    headerName: "Quantity Remaining",
                  },
                  { field: "dateLastApplied", headerName: "Date Last Applied" },
                  { field: "action", headerName: "Action" },
                ]}
                renderRow={(row) => (
                  <>
                    <span>{row.name}</span>
                    <span>{row.quantityGotten}</span>
                    <span>{row.quantityRemaining}</span>
                    <span>{row.dateLastApplied}</span>
                    <ButtonText
                      style={{ color: "var(--color-green-600)" }}
                      onClick={() => handleViewRow(row, list)}
                    >
                      View
                    </ButtonText>
                  </>
                )}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
