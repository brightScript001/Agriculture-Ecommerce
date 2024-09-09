import React from "react";
import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { calculateTotalPrice } from "../../../utils/OrderTotalPrice";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const BlockItem = styled.div``;
const Input = styled.input`
  width: 30rem;
  padding: 10px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  margin: 5px 0;
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Item = styled.span`
  font-size: var(--font-size-sm);
`;

const Price = styled.span`
  font-size: var(--font-size-sm);
`;

const Wrapper = styled.div`
  padding: 10px;
  background: var(--color-white-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  margin: 20px 0;
`;

export const OrderText: React.FC<{ order: any }> = ({ order }) => {
  const totalPrice = calculateTotalPrice(order.orderId);

  return (
    <>
      <Block>
        <BlockItem>
          <Heading as="h3">Name of customer</Heading>
          <Input type="text" value={order.customerName} readOnly />
        </BlockItem>
        <BlockItem>
          <Heading as="h3">Order ID</Heading>
          <Input type="text" value={order.orderId} readOnly />
        </BlockItem>
      </Block>
      <BlockItem>
        <Heading as="h3">Customer's Order</Heading>
        <Wrapper>
          {" "}
          {order.orderDetails.map((item: any) => (
            <OrderDetails key={item.item}>
              <Item>
                {item.quantityInKg} {item.item}
              </Item>
              <Price>₦{item.totalPrice}</Price>
            </OrderDetails>
          ))}{" "}
          <OrderDetails>
            <Item>Tax</Item>
            <Price>₦{order.tax}</Price>
          </OrderDetails>
          <OrderDetails>
            <Item>Shipping fee</Item>
            <Price>₦{order.shippingFee}</Price>
          </OrderDetails>
          <OrderDetails>
            <Item>Total</Item>
            <Price>₦{totalPrice.toFixed(2)}</Price>
          </OrderDetails>
        </Wrapper>
      </BlockItem>
      <Block>
        <BlockItem>
          <Heading as="h3">Shipping address</Heading>
          <Input type="text" value={order.shippingAddress} readOnly />
        </BlockItem>
        <BlockItem>
          <Heading as="h3">Date of Order</Heading>
          <Input type="text" value={order.dateOfOrder} readOnly />
        </BlockItem>
      </Block>
    </>
  );
};
