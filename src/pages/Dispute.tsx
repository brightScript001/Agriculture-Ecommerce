import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";
import TextArea from "../ui/TextArea";
import Button from "../features/seller/dispute/Button";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { updateOrderStatus } from "../api/orders"; // Adjust the import path if needed

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 50%;
`;

const Title = styled.p`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Item = styled.div`
  margin: 20px 0;
`;

const Block = styled.div``;

const Dispute: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => {
      if (orderId) {
        return updateOrderStatus(orderId, "disputed");
      }
      throw new Error("Order ID is required");
    },
    onSuccess: () => {
      toast.success(`Order ${orderId} status changed to disputed`);
      navigate("/orders/:status");
    },
    onError: (error) => {
      console.error("Failed to change Order status: ", error);
      toast.error("Failed to change order status");
    },
  });

  const handleSubmitDispute = () => {
    console.log("Order ID:", orderId);
    if (orderId) {
      mutation.mutate();
    }
  };

  return (
    <Wrapper>
      <Heading as="h1">Dispute Order</Heading>
      <Block>
        <Item>
          <Title>Dispute Title</Title>
          <StyledInput type="text" />
        </Item>
        <Item>
          <Title>Dispute Description</Title>
          <TextArea
            name="description"
            placeholder="Enter your description here"
          />
        </Item>

        <Button onSubmitDispute={handleSubmitDispute} />
      </Block>
    </Wrapper>
  );
};

export default Dispute;
