import Heading from "../../../../shared/ui/Heading";
import { Wrapper } from "./PaymentStatus";

export function PaymentMode() {
  return (
    <Wrapper>
      <Heading as="h2">Payment Mode</Heading>
      <p
        style={{
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        Card payments
      </p>
      <p
        style={{
          marginBottom: "1rem",
        }}
      >
        Bank deposit
      </p>
      <p
        style={{
          marginBottom: "1rem",
        }}
      >
        USSD/Bank app transfer
      </p>
    </Wrapper>
  );
}
