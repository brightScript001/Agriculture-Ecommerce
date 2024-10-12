import React from "react";
import styled from "styled-components";
import Input from "../../../shared/ui/Input";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const ContactInformation: React.FC = () => {
  return (
    <Section>
      <Input
        style={{ width: "100%", border: "1px solid var(--color-grey-600)" }}
        type="text"
        placeholder="Your Name"
      />
      <Input
        style={{ width: "100%", border: "1px solid var(--color-grey-600)" }}
        type="email"
        placeholder="Email Address"
      />
      <Input
        style={{ width: "100%", border: "1px solid var(--color-grey-600)" }}
        type="tel"
        placeholder="Phone Number"
      />
    </Section>
  );
};
