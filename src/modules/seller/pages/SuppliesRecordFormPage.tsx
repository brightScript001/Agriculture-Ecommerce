import React from "react";
import { useLocation } from "react-router-dom";
import SuppliesRecordFormComponent from "../components/inventory/suppliesRecord/SuppliesRecordFormComponent";
import { SuppliesRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const SuppliesRecordFormPage: React.FC = () => {
  const location = useLocation();
  const record = location.state?.record || {
    name: "",
    quantityGotten: 0,
    quantityRemaining: 0,
    dateLastApplied: "",
    action: "",
  };

  const listName = location.state?.listName || "Supplies Record";

  const handleFormSubmit = (data: SuppliesRecord) => {
    console.log("Submitted data:", data);
    // TODO: Handle form submission logic here (e.g., API call)
  };

  return (
    <Wrapper>
      <Heading as="h2">
        {record.name ? `View ${listName}` : `Add an Update on ${listName}`}
      </Heading>
      <SuppliesRecordFormComponent
        selectedRow={record}
        onSubmit={handleFormSubmit}
      />
    </Wrapper>
  );
};

export default SuppliesRecordFormPage;
