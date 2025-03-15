import styled from "styled-components";
import Heading from "../../../../shared/ui/Heading";

export const Wrapper = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  width: 22rem;
  padding: 1.25rem;
  text-align: start;
  box-shadow: var(--shadow-sm);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function PaymentStatus() {
  return (
    <Wrapper>
      <Heading as="h2">Payment Status</Heading>
      <p
        style={{
          color: "var(--color-green-500)",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        591 payments confirmed
      </p>
      <p style={{ color: "var(--color-red-500)", marginBottom: "1rem" }}>
        48 payments processing{" "}
      </p>
      <p style={{ color: "var(--color-grey-500)" }}>32 payments pending</p>
    </Wrapper>
  );
}
