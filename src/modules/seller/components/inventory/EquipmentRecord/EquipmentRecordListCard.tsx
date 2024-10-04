import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { EquipmentRecordListHeader } from "./EquipmentRecordListHeader";
import { EquipmentMaintenanceRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

// Styled component for the status text
const StatusText = styled.span<{ status: string }>`
  color: ${({ status }) =>
    status !== "Good Condition"
      ? "var(--color-red-600)"
      : "var(--color-green-600)"};
`;

interface ButtonListProps {
  onViewRow: (row: EquipmentMaintenanceRecord) => void;
  onDelete: (listName: string) => void;
  onDownload: (listName: string) => void;
}

export const EquipmentRecordListCard: React.FC<ButtonListProps> = ({
  onDelete,
  onDownload,
}) => {
  const navigate = useNavigate();
  const equipmentList = ["Harvester", "Weeder", "Tractor", "Sprayer"];
  const [activeList, setActiveList] = useState<string | null>(null);

  // Example data for the equipment table
  const [equipmentData] = useState<EquipmentMaintenanceRecord[]>([
    {
      name: "Harvester",
      lastMaintenance: "2024-09-15",
      status: "Due for maintenance",
      action: "View",
    },
    {
      name: "Tractor",
      lastMaintenance: "2024-08-05",
      status: "Good Condition",
      action: "View",
    },
  ]);

  const handleToggle = (listName: string) => {
    setActiveList(activeList === listName ? null : listName);
  };

  const handleViewRow = (row: EquipmentMaintenanceRecord, listName: string) => {
    navigate(`/seller/equipment-record-form`, {
      state: { record: row, listName },
    });
  };

  return (
    <div>
      {equipmentList.map((list) => (
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
                onClick={() => onDelete(list)}
                style={{ color: "red" }}
              >
                Delete
              </ButtonText>
              <ButtonText onClick={() => onDownload(list)}>Download</ButtonText>
            </ButtonGroup>
          </div>
          {activeList === list && (
            <div
              style={{
                marginTop: "1rem",
                backgroundColor: "var(--color-grey-0)",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              {/* Render the header for the list */}
              <EquipmentRecordListHeader listName={list} />
              {/* Render the DataTable */}
              <DataTable<EquipmentMaintenanceRecord>
                rows={equipmentData}
                columns={[
                  { field: "name", headerName: "Name" },
                  { field: "lastMaintenance", headerName: "Last Maintenance" },
                  {
                    field: "status",
                    headerName: "Status",
                    renderCell: (row) => (
                      <StatusText status={row.status}>{row.status}</StatusText>
                    ),
                  },
                  { field: "action", headerName: "Action" },
                ]}
                renderRow={(row) => (
                  <>
                    <span>{row.name}</span>
                    <span>{row.lastMaintenance}</span>
                    <StatusText status={row.status}>{row.status}</StatusText>
                    <ButtonText onClick={() => handleViewRow(row, list)}>
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
