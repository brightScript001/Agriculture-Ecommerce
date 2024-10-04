import styled from "styled-components";
import ViewMore from "../../../../shared/ui/Viewmore";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

export function TransactionHistoryHeader() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2 style={{}}>Transaction History</h2>
      <ViewMore onClick={() => navigate("")} />
    </Wrapper>
  );
}
