import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "../../../shared/ui/Modal";
import { CollapsibleSection } from "../../../shared/ui/CollapsibleSection";
import Heading from "../../../shared/ui/Heading";

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

const ShippingAddressContainer = styled.div`
  margin-top: 1rem;
`;

export const DeliveryOptions: React.FC<{
  deliveryOption: string;
  setDeliveryOption: (option: string) => void;
}> = ({ deliveryOption, setDeliveryOption }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Section>
      <RadioGroup>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="delivery"
            value="pickup"
            checked={deliveryOption === "pickup"}
            onChange={() => setDeliveryOption("pickup")}
          />
          <div>
            Pick-up Station
            <span
              style={{ color: "var(--color-green-600)", cursor: "pointer" }}
              onClick={() => setModalOpen(true)}
            >
              {" "}
              Click here{" "}
            </span>
            to see locations
          </div>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="delivery"
            value="door"
            checked={deliveryOption === "door"}
            onChange={() => setDeliveryOption("door")}
          />
          Door Delivery (Abuja Only)
        </RadioLabel>
      </RadioGroup>
      <ShippingAddressContainer>
        <strong>Shipping Address: </strong>
        {deliveryOption === "pickup"
          ? "Pick-up Station Address"
          : "Door Delivery Address, Abuja"}
      </ShippingAddressContainer>

      <ModalComponent isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Heading as="h2" style={{ textAlign: "center" }}>
          Our Pick-up Stations
        </Heading>
        <CollapsibleSection title="Abuja">
          <li>
            OneFarm Head Office - Suite No. 7, cherry hill plaza, Eke Yusuf
            close, behind Eterna Filling station Utako, Abuja.
          </li>
        </CollapsibleSection>
        <CollapsibleSection title="Lagos">
          <li>Pickup location will be communicated before delivery date</li>
        </CollapsibleSection>
        <CollapsibleSection title="Other Locations">
          <li>
            We’re working on adding more locations soon. We’ll send you an email
            when you can check them out.
          </li>
        </CollapsibleSection>
      </ModalComponent>
    </Section>
  );
};
