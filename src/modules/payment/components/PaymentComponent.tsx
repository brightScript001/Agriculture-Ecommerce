import React, { useState } from "react";
import { ContactInformation } from "./ContactInfo";
import { DeliveryOptions } from "./DeliveryOptions";
import { PromoCode } from "./PromoCode";
import { AmountDetails } from "./AmountSection";
import { PaymentMethod } from "./PaymentMethod";
import { PlaceOrderButton } from "./PlaceOrder";
import { SuccessModal } from "./SuccessModal";
import { CollapsibleSection } from "../../../shared/ui/CollapsibleSection";
import { Footer } from "./Footer";
import { generateOrderID } from "../utils/generateOrderID";

interface PaymentComponentProps {
  subtotal: number;
}

export const PaymentComponent: React.FC<PaymentComponentProps> = ({
  subtotal,
}) => {
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  const [isModalOpen, setModalOpen] = useState(false);
  const [orderID, setOrderID] = useState<string>("");

  const handlePlaceOrder = () => {
    const newOrderID = generateOrderID();
    setOrderID(newOrderID);
    setModalOpen(true);
  };

  return (
    <main style={{ padding: "2rem", backgroundColor: "var(--color-grey-0)" }}>
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

      <AmountDetails
        subtotal={subtotal}
        deliveryFee={deliveryOption === "pickup" ? 1000 : 1500}
      />
      <PaymentMethod />
      <PlaceOrderButton onPlaceOrder={handlePlaceOrder} />
      <Footer />

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        orderID={orderID}
      />
    </main>
  );
};
