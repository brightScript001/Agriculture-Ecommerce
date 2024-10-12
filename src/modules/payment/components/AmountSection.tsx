import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 2rem;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const AmountDetails: React.FC<{
  subtotal: number;
  deliveryFee: number;
}> = ({ subtotal, deliveryFee }) => {
  const totalAmount = subtotal + deliveryFee;

  return (
    <Section>
      <TotalSection>
        <span>Subtotal</span>
        <span>₦{subtotal.toFixed(2)}</span>
      </TotalSection>
      <TotalSection>
        <span>Delivery </span>
        <span>₦{deliveryFee.toFixed(2)}</span>
      </TotalSection>
      <TotalSection>
        <strong>Total </strong>
        <strong style={{ color: "var(--color-green-600)" }}>
          ₦{totalAmount.toFixed(2)}
        </strong>
      </TotalSection>
    </Section>
  );
};
