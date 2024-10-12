import React from "react";
import styled from "styled-components";
import Input from "../../../shared/ui/Input";

const Section = styled.div`
  margin-bottom: 2rem;
`;

export const PromoCode: React.FC = () => {
  return (
    <Section>
      <Input
        style={{ width: "100%", border: "1px solid var(--color-grey-600)" }}
        type="text"
        placeholder="Enter Promo Code (optional)"
      />
    </Section>
  );
};
