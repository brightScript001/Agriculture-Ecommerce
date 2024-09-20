import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import FarmRecordList from "../components/inventory/FarmRecordList";

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

function FarmRecord() {
  return (
    <Wrapper>
      <Heading as="h2">
        Farm General Records <Span>(Last Updated April 29, 2024)</Span>
      </Heading>
      <FarmRecordList />
    </Wrapper>
  );
}
export default FarmRecord;
