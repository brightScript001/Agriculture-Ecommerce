import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 2rem;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

export const PaymentMethod: React.FC = () => {
  return (
    <Section>
      <RadioGroup>
        <RadioLabel>
          <RadioInput type="radio" name="payment" value="paystack" />
          Pay with Paystack
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" name="payment" value="flutterwave" />
          Pay with Flutterwave
        </RadioLabel>
      </RadioGroup>
    </Section>
  );
};
