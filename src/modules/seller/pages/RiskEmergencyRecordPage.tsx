import React from "react";
import { RiskEmergencyRecordListCard } from "../components/inventory/riskEmergencyRecord/RiskEmergencyRecordListCard";
import { useNavigate } from "react-router-dom";
import { RiskEmergencyRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
`;

const Span = styled.span`
  text-decoration: underline;
  font-size: var(--font-size-md);
`;
const RiskEmergencyRecordPage: React.FC = () => {
  const navigate = useNavigate();

  // Handles the delete action for a risk emergency record
  const handleDelete = (listName: string) => {
    // Call the API to delete the record
    console.log(`Deleting ${listName}`);
  };

  // Handles the download action for a risk emergency record
  const handleDownload = (listName: string) => {
    // Implement the logic to download the record
    console.log(`Downloading ${listName}`);
  };

  // Handles the view action for a specific record
  const handleViewRow = (row: RiskEmergencyRecord) => {
    navigate("/risk-emergency-record-form", { state: { record: row } });
  };

  return (
    <Wrapper>
      <Header>
        <Heading as="h2">Risk & Emergency Records</Heading>
        <Span>(Last Updated April 29, 2024)</Span>
      </Header>
      <RiskEmergencyRecordListCard
        onDelete={handleDelete}
        onDownload={handleDownload}
        onViewRow={handleViewRow}
      />
    </Wrapper>
  );
};

export default RiskEmergencyRecordPage;
