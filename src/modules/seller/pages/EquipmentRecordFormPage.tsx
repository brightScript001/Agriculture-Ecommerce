import React from "react";
import { useLocation } from "react-router-dom";
import EquipmentRecordFormComponent from "../components/inventory/EquipmentRecord/EquipmentRecordFormComponent";
import { EquipmentMaintenanceRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  margin-top: 5rem;
`;

const EquipmentRecordFormPage: React.FC = () => {
  const location = useLocation();
  const record = location.state?.record || {
    name: "",
    lastMaintenance: "",
    status: "",
    action: "",
  };

  const listName = location.state?.listName || "Record";

  const handleFormSubmit = (data: EquipmentMaintenanceRecord) => {
    console.log("Submitted data:", data);
  };

  return (
    <Wrapper>
      <Heading as="h2">
        {record.name
          ? `Update ${record.name} Record`
          : `Add New ${listName} Record`}
      </Heading>
      <EquipmentRecordFormComponent
        selectedRow={record}
        onSubmit={handleFormSubmit}
      />
    </Wrapper>
  );
};

export default EquipmentRecordFormPage;
