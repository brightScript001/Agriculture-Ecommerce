import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../api/orders";
import { OrderText } from "../components/OrderDetailsText";
import { Buttons } from "../components/OrderDetailsBtn";
import { Approve } from "../components/ApproveModal";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const OrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDispute = () => {
    navigate(`/order/${orderId}/dispute`);
  };

  const handleApprove = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <OrderText order={order} />
      <Buttons onDispute={handleDispute} onApprove={handleApprove} />
      <Approve isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Wrapper>
  );
};

export default OrderDetails;
