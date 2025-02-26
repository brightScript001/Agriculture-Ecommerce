import React from "react";
import { SuppliesRecordListCard } from "../components/inventory/suppliesRecord/ListCard";
import { useNavigate } from "react-router-dom";
import { SuppliesRecord } from "../components/inventory/RecordTypes";
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

export const SuppliesRecordListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDelete = (listName: string) => {
    console.log(`Deleting ${listName}`);
  };

  const handleDownload = (listName: string) => {
    console.log(`Downloading ${listName}`);
  };

  const handleViewRow = (row: SuppliesRecord) => {
    navigate("/seller/supplies-record-form", { state: { record: row } });
  };

  return (
    <main>
      <Header>
        <Heading as="h2">Supplies Record </Heading>
        <Span> (Last Updated April 29, 2024)</Span>
      </Header>
      <SuppliesRecordListCard
        onDelete={handleDelete}
        onDownload={handleDownload}
        onViewRow={handleViewRow}
      />
    </main>
  );
};
