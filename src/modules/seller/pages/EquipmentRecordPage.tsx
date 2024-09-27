import React from "react";
import { EquipmentRecordListCard } from "../components/inventory/EquipmentRecord/EquipmentRecordListCard";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import { EquipmentMaintenanceRecord } from "../components/inventory/RecordTypes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  margin-top: 5rem;
`;

const EquipmentRecordPage: React.FC = () => {
  const handleViewRow = (row: EquipmentMaintenanceRecord) => {
    console.log("Selected row:", row);
  };

  const handleDelete = () => {
    console.log(`Deleted record list`);
  };

  const handleDownload = (listName: string) => {
    console.log(`Downloaded record list: ${listName}`);
  };

  return (
    <Wrapper>
      <Heading as="h2">Equipment and Maintenance Records</Heading>
      <EquipmentRecordListCard
        onViewRow={handleViewRow}
        onDelete={handleDelete}
        onDownload={handleDownload}
      />
    </Wrapper>
  );
};

export default EquipmentRecordPage;
