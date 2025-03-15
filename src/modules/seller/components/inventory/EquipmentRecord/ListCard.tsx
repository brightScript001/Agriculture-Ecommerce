import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { EquipmentRecordListHeader } from "./ListHeader";
import { EquipmentMaintenanceRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  padding: 20px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EquipmentContainer = styled.div`
  margin-top: 1rem;
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  padding: 20px;
`;

const ListTitle = styled.span`
  font-size: var(--font-size-md);
  font-weight: 500;
  color: var(--color-text-primary);
`;

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
          <CardContainer>
            <ListTitle>{list}</ListTitle>
            <ButtonGroup>
              <ButtonText
                color="var(--color-primary)"
                onClick={() => handleToggle(list)}
              >
                {activeList === list ? "Close" : "View"}
              </ButtonText>
              <ButtonText
                color="var(--color-error)"
                onClick={() => onDelete(list)}
              >
                Delete
              </ButtonText>
              <ButtonText
                color="var(--color-text)"
                onClick={() => onDownload(list)}
              >
                Download
              </ButtonText>
            </ButtonGroup>
          </CardContainer>

          {activeList === list && (
            <EquipmentContainer>
              <EquipmentRecordListHeader listName={list} />
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
            </EquipmentContainer>
          )}
        </div>
      ))}
    </div>
  );
};
