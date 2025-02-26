import React from "react";
import { useLocation } from "react-router-dom";
import RecordFormComponent from "../components/inventory/farmRecord/FormComponent";
import { FarmGeneralRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

export const RecordFormPage: React.FC = () => {
  const location = useLocation();
  const record = location.state?.record || {
    name: "",
    quantity: 0,
    areaCovered: "",
    action: "",
  };

  const listName = location.state?.listName || "Record";

  const handleFormSubmit = (data: FarmGeneralRecord) => {
    console.log("Submitted data:", data);
    //TODO Handle form submission logic  here
  };

  return (
    <Wrapper>
      <Heading as="h2">
        {record.name
          ? `View ${listName} Record`
          : `Add an update on ${listName}`}
      </Heading>
      <RecordFormComponent selectedRow={record} onSubmit={handleFormSubmit} />
    </Wrapper>
  );
};
