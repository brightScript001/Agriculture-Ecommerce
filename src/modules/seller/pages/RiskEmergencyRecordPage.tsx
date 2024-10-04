import React from "react";
import { RiskEmergencyRecordListCard } from "../components/inventory/riskEmergencyRecord/RiskEmergencyRecordListCard";
import { useNavigate } from "react-router-dom";
import { RiskEmergencyRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

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

  const handleDelete = (listName: string) => {
    console.log(`Deleting ${listName}`);
  };

  const handleDownload = (listName: string) => {
    console.log(`Downloading ${listName}`);
  };

  const handleViewRow = (row: RiskEmergencyRecord) => {
    navigate("/seller/risk-emergency-record-form", { state: { record: row } });
  };

  return (
    <main>
      <Header>
        <Heading as="h2">Risk & Emergency Records</Heading>
        <Span>(Last Updated April 29, 2024)</Span>
      </Header>
      <RiskEmergencyRecordListCard
        onDelete={handleDelete}
        onDownload={handleDownload}
        onViewRow={handleViewRow}
      />
    </main>
  );
};

export default RiskEmergencyRecordPage;
