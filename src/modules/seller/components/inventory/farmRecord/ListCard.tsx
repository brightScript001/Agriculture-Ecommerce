import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { FarmRecordListHeader } from "./FarmRecordListHeader";
import { FarmGeneralRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";

interface ButtonListProps {
  onViewRow: (row: FarmGeneralRecord) => void;
  onDelete: (listName: string) => void;
  onDownload: (listName: string) => void;
}
export const FarmRecordListCard: React.FC<ButtonListProps> = ({
  onDelete,
  onDownload,
}) => {
  const navigate = useNavigate();
  const lists = ["Seeds and Planting", "Crops and Harvesting", "Farm Health"];
  const [activeList, setActiveList] = useState<string | null>(null);
  const [farmGeneralData] = useState<FarmGeneralRecord[]>([
    { name: "Seed A", quantity: 20, areaCovered: "2 acres", action: "View" },
    { name: "Seed B", quantity: 30, areaCovered: "3 acres", action: "View" },
  ]);

  const handleToggle = (listName: string) => {
    if (activeList === listName) {
      setActiveList(null);
    } else {
      setActiveList(listName);
    }
  };

  const handleViewRow = (row: FarmGeneralRecord, listName: string) => {
    navigate(`/seller/farm-record-form`, { state: { record: row, listName } });
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
              <FarmRecordListHeader listName={list} />

              <DataTable<FarmGeneralRecord>
                rows={farmGeneralData}
                columns={[
                  { field: "name", headerName: "Name" },
                  { field: "quantity", headerName: "Quantity" },
                  { field: "areaCovered", headerName: "Area Covered" },
                  { field: "action", headerName: "Action" },
                ]}
                renderRow={(row) => (
                  <>
                    <span>{row.name}</span>
                    <span>{row.quantity}</span>
                    <span>{row.areaCovered}</span>
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
