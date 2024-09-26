import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../../shared/ui/Button";

interface ListHeaderProps {
  listName: string;
}

const ListHeaderDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const SuppliesRecordListHeader: React.FC<ListHeaderProps> = ({
  listName,
}) => {
  const navigate = useNavigate();

  const handleAddUpdate = () => {
    navigate("/supplies-record-form", { state: { record: null, listName } });
  };

  return (
    <ListHeaderDiv>
      <h2 style={{ textDecoration: "underline" }}>{listName}</h2>
      <Button onClick={handleAddUpdate}>Add an Update</Button>
    </ListHeaderDiv>
  );
};
