import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../api/orders";
import { OrderText } from "../features/seller/OrderDetails/Text";
import { Buttons } from "../features/seller/OrderDetails/Buttons";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
`;

const OrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => fetchOrderById(orderId!),
    enabled: !!orderId,
  });

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

  // Handle dispute action
  const handleDispute = () => {
    navigate(`/order/${orderId}/dispute`);
  };

  return (
    <Wrapper>
      <OrderText order={order} />
      <Buttons onDispute={handleDispute} />
    </Wrapper>
  );
};

export default OrderDetails;
