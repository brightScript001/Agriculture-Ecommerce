import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { RiskEmergencyRecordListHeader } from "./ListHeader";
import { RiskEmergencyRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

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

  const handleToggle = (listName: string) =>
    setActiveList(activeList === listName ? null : listName);

  const handleViewRow = (row: RiskEmergencyRecord, listName: string) => {
    navigate(`/seller/risk-emergency-record-form`, {
      state: { record: row, listName },
    });
  };

  return (
    <div>
      {lists.map((list) => (
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
            <RecordCard>
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
                      color="var(--color-green-600)"
                      onClick={() => handleViewRow(row, list)}
                    >
                      View
                    </ButtonText>
                  </>
                )}
              />
            </RecordCard>
          )}
        </div>
      ))}
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  margin: 1rem 0;
  padding: 20px;
  border: none;
  border-radius: var(--border-radius-md);
`;

const RecordCard = styled.div`
  margin-top: 1rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
`;

const ListTitle = styled.span`
  font-size: var(--font-size-md);
  font-weight: 500;
  color: var(--color-text-primary);
`;
