import React, { useState } from "react";
import styled from "styled-components";
import { ContactInformation } from "./ContactInfo";
import { DeliveryOptions } from "./DeliveryOptions";
import { PromoCode } from "./PromoCode";
import { AmountDetails } from "./AmountSection";
import { PaymentMethod } from "./PaymentMethod";
import { PlaceOrderButton } from "./PlaceOrder";
import { SuccessModal } from "./SuccessModal";
import { CollapsibleSection } from "../../../shared/ui/CollapsibleSection";
import { Footer } from "./Footer";
import { generateId } from "../utils/generateOrderID";

interface PaymentComponentProps {
  subtotal: number;
}

export const PaymentComponent: React.FC<PaymentComponentProps> = ({
  subtotal,
}) => {
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  const [isModalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState<string>("");

  const handlePlaceOrder = () => {
    const newId = generateId();
    setId(newId);
    setModalOpen(true);
  };

  return (
    <PaymentContainer>
      <Section>
        <CollapsibleSection title="Contact Information">
          <ContactInformation />
        </CollapsibleSection>

        <CollapsibleSection title="Delivery Options">
          <DeliveryOptions
            deliveryOption={deliveryOption}
            setDeliveryOption={setDeliveryOption}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Promo Code">
          <PromoCode />
        </CollapsibleSection>
      </Section>
      <Section>
        {" "}
        <AmountDetails
          subtotal={subtotal}
          deliveryFee={deliveryOption === "pickup" ? 1000 : 1500}
        />
      </Section>

      <PaymentMethod />
      <PlaceOrderButton onPlaceOrder={handlePlaceOrder} />
      <Footer />

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        id={id}
      />
    </PaymentContainer>
  );
};

const PaymentContainer = styled.main`
  padding: 2rem;
  background-color: var(--color-background);
`;

const Section = styled.div`
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1rem;
`;
