import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../DataTable";
import { SuppliesRecordListHeader } from "./ListHeader";
import { SuppliesRecord } from "../RecordTypes";
import ButtonText from "../../../../../shared/ui/ButtonText";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import styled from "styled-components";

// Styled Components
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  margin: 1rem 0;
  padding: 20px;
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

  const handleToggle = (listName: string) =>
    setActiveList(activeList === listName ? null : listName);

  const handleViewRow = (row: SuppliesRecord, listName: string) => {
    navigate(`/seller/supplies-record-form`, {
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
