import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import RecordListCard from "../components/inventory/RecordListCard";
import { FarmGeneralRecord } from "../components/inventory/RecordTypes";

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

const RecordListPage: React.FC = () => {
  const handleViewRow = (row: FarmGeneralRecord) => {
    console.log("Selected row:", row);
  };

  const handleDelete = (listName: string) => {
    console.log(`Deleted: ${listName}`);
    //TODO Handle delete logic here
  };

  const handleDownload = (listName: string) => {
    console.log(`Downloaded: ${listName}`);
    //TODO Handle download logic here
  };

  return (
    <Wrapper>
      <Header>
        <Heading as="h2">Farm General Records </Heading>
        <Span> (Last Updated April 29, 2024)</Span>
      </Header>

      <RecordListCard
        onViewRow={handleViewRow}
        onDelete={handleDelete}
        onDownload={handleDownload}
      />
    </Wrapper>
  );
};

export default RecordListPage;
