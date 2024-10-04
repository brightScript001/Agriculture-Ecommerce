import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../../shared/ui/Button";

interface ListHeaderProps {
  listName: string;
}

const ListHeaderDiv = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

export const RiskEmergencyRecordListHeader: React.FC<ListHeaderProps> = ({
  listName,
}) => {
  const navigate = useNavigate();

  const handleAddUpdate = () => {
    navigate("/seller/risk-emergency-record-form", {
      state: { record: null, listName },
    });
  };

  return (
    <ListHeaderDiv>
      <h2 style={{ textDecoration: "underline" }}>{listName}</h2>
      <Button onClick={handleAddUpdate}>Add an Update</Button>
    </ListHeaderDiv>
  );
};
