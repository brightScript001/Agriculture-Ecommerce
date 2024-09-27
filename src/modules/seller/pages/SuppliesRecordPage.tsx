import React from "react";
import { SuppliesRecordListCard } from "../components/inventory/suppliesRecord/SuppliesRecordListCard";
import { useNavigate } from "react-router-dom";
import { SuppliesRecord } from "../components/inventory/RecordTypes";
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

export const SuppliesRecordListPage: React.FC = () => {
  const navigate = useNavigate();

  // This handles the delete action for a supply list
  const handleDelete = (listName: string) => {
    // Here you would call the API to delete the list
    console.log(`Deleting ${listName}`);
  };

  // This handles the download action for a supply list
  const handleDownload = (listName: string) => {
    // Here you would implement the logic to download the list
    console.log(`Downloading ${listName}`);
  };

  // This handles the view action for a specific record
  const handleViewRow = (row: SuppliesRecord) => {
    navigate("/supplies-record-form", { state: { record: row } });
  };

  return (
    <Wrapper>
      <Header>
        <Heading as="h2">Supplies Record </Heading>
        <Span> (Last Updated April 29, 2024)</Span>
      </Header>
      <SuppliesRecordListCard
        onDelete={handleDelete}
        onDownload={handleDownload}
        onViewRow={handleViewRow}
      />
    </Wrapper>
  );
};
