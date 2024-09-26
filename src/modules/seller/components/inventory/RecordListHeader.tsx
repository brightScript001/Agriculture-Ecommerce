import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";

interface ListHeaderProps {
  listName: string;
}

const ListHeaderDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const RecordListHeader: React.FC<ListHeaderProps> = ({ listName }) => {
  const navigate = useNavigate();

  const handleAddUpdate = () => {
    navigate("/record-form", { state: { record: null, listName } });
  };

  return (
    <ListHeaderDiv>
      <h2>{listName}</h2>
      <Button onClick={handleAddUpdate}>Add an Update</Button>
    </ListHeaderDiv>
  );
};

export default RecordListHeader;
