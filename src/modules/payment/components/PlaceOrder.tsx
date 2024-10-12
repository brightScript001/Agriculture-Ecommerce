import React from "react";
import Button from "../../../shared/ui/Button";

export const PlaceOrderButton: React.FC<{ onPlaceOrder: () => void }> = ({
  onPlaceOrder,
}) => {
  return (
    <Button
      style={{ width: "100%", marginBottom: "2rem" }}
      onClick={onPlaceOrder}
    >
      Place Order
    </Button>
  );
};
