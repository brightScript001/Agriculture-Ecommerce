import React from "react";
import styled from "styled-components";

interface OrderStatusProps {
  status: string;
}

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "var(--color-red-600)";
      case "Approved":
        return "var(--color-green-600)";
      case "Delivered":
        return "inherit";
      default:
        return "inherit";
    }
  };

  return <Status color={getStatusColor(status)}>{status}</Status>;
};

const Status = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;
