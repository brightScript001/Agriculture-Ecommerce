import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../api/orders";
import { OrderText } from "../components/marketplace/OrderDetailsText";
import { Buttons } from "../components/marketplace/OrderDetailsBtn";
import { Approve } from "../components/marketplace/ApproveModal";
import SpinnerComponent from "@shared/ui/Spinner";

export const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrderById(id!),
    enabled: !!id,
  });

  if (isLoading) return <SpinnerComponent />;
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
    navigate(`/seller/orders/detail/${id}/dispute`);
  };

  const handleApprove = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <OrderText order={order} />
      <Buttons onDispute={handleDispute} onApprove={handleApprove} />
      <Approve isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
