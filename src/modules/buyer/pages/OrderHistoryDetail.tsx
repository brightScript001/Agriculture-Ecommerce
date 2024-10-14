import React from "react";
import { OrderText } from "../components/OrderDetail";
import { useFetchOrderById } from "../hooks/fetchOrderHistory";

export const OrderHistoryDetails: React.FC = () => {
  const { data: order, isLoading, isError, error } = useFetchOrderById();

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <p>
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </p>
    );

  if (!order) {
    return <p>Oops! Order not found</p>;
  }

  return (
    <main>
      <OrderText order={order} />
    </main>
  );
};
