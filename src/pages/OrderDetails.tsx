import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { OrderText } from "../features/seller/OrderDetails/Text";
import { Buttons } from "../features/seller/OrderDetails/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../slices/orderSlice";
import { AppDispatch, AppState } from "../store";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const OrderSummary: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const orders = useSelector((state: AppState) => state.orders.orders);
  const order = orders.find((order) => order.orderId === orderId);

  useEffect(() => {
    if (!orders.length) {
      dispatch(fetchOrders());
    }
  }, [dispatch, orders.length]);

  if (!order) {
    return <p>Oops Order not found</p>;
  }

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

export default OrderSummary;
