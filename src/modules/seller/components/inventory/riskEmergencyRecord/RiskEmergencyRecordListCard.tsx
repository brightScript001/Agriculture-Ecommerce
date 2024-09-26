import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { RiskEmergencyRecordListHeader } from "./RiskEmergencyRecordListHeader";
import { RiskEmergencyRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";

interface ButtonListProps {
  onViewRow: (row: RiskEmergencyRecord) => void;
  onDelete: (listName: string) => void;
  onDownload: (listName: string) => void;
}

export const RiskEmergencyRecordListCard: React.FC<ButtonListProps> = ({
  onDelete,
  onDownload,
}) => {
  const navigate = useNavigate();
  const lists = [
    "Farm Attack by Pest",
    "Fruit Over-ripening",
    "Fire in Farm House",
    "Expired Herbicide",
  ];
  const [activeList, setActiveList] = useState<string | null>(null);
  const [riskEmergencyData] = useState<RiskEmergencyRecord[]>([
    {
      name: "Pest Attack",
      cropAttacked: "Corn",
      dateOfAttack: "2023-09-16",
      status: "Unresolved",
      action: "View",
    },
    {
      name: "Fire Outbreak",
      cropAttacked: "Wheat",
      dateOfAttack: "2023-09-12",
      status: "Resolved",
      action: "View",
    },
  ]);

  const handleToggle = (listName: string) => {
    if (activeList === listName) {
      setActiveList(null);
    } else {
      setActiveList(listName);
    }
  };

  const handleViewRow = (row: RiskEmergencyRecord, listName: string) => {
    navigate(`/risk-emergency-record-form`, {
      state: { record: row, listName },
    });
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
              <RiskEmergencyRecordListHeader listName={list} />

              <DataTable<RiskEmergencyRecord>
                rows={riskEmergencyData}
                columns={[
                  { field: "name", headerName: "Name" },
                  { field: "cropAttacked", headerName: "Crop Attacked" },
                  { field: "dateOfAttack", headerName: "Date of Attack" },
                  { field: "status", headerName: "Status" },
                  { field: "action", headerName: "Action" },
                ]}
                renderRow={(row) => (
                  <>
                    <span>{row.name}</span>
                    <span>{row.cropAttacked}</span>
                    <span>{row.dateOfAttack}</span>
                    <span>{row.status}</span>
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
