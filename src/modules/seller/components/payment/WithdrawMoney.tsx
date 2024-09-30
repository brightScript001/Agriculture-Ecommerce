import styled from "styled-components";
import Heading from "../../../../shared/ui/Heading";
import { Wrapper } from "./PaymentStatus";
import Button from "../../../../shared/ui/Button";

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
`;

export function WithdrawMoney() {
  return (
    <Wrapper>
      <Heading as="h2">Withdraw Money</Heading>
      <p
        style={{
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        Your balance: N4,090,354.20
      </p>
      <StyledButton>Click to withdraw</StyledButton>
    </Wrapper>
  );
}
