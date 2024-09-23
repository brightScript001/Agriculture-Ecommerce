import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import SuppliesRecordList from "../components/inventory/SuppliesRecordList";

const Wrapper = styled.div`
  margin: auto 0;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
const Span = styled.span`
  font-weight: 400;
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: var(--font-size-md);
  }
`;

function SuppliesRecord() {
  return (
    <Wrapper>
      <StyledHeading as="h2">
        Supplies Records <Span>(Last Updated April 29, 2024)</Span>
      </StyledHeading>
      <SuppliesRecordList />
    </Wrapper>
  );
}
export default SuppliesRecord;
