import React from "react";
import Button from "../../../shared/ui/Button";

interface PlaceOrderButtonProps {
  onPlaceOrder: () => void;
}

export const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = ({
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
