import React from "react";

interface ShippingAddressProps {
  deliveryOption: string;
}

export const ShippingAddress: React.FC<ShippingAddressProps> = ({
  deliveryOption,
}) => {
  const address =
    deliveryOption === "pickup"
      ? "Pick-up Station Address"
      : "Door Delivery Address";

  return (
    <div>
      <h3>Shipping Address</h3>
      <p>{address}</p>
    </div>
  );
};
