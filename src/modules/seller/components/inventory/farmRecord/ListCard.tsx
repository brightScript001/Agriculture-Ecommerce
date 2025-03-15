import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { FarmRecordListHeader } from "./ListHeader";
import { FarmGeneralRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

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

  const handleToggle = (listName: string) =>
    setActiveList(activeList === listName ? null : listName);

  const handleViewRow = (row: FarmGeneralRecord, listName: string) => {
    navigate(`/seller/farm-record-form`, { state: { record: row, listName } });
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
