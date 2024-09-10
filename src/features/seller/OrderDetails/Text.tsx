import React from "react";
import styled from "styled-components";
import Heading from "../../../ui/Heading";

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

// Interfaces
interface OrderDetail {
  item: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

interface Order {
  customerName: string;
  orderId: string;
  orderDetails: OrderDetail[];
  shippingAddress: string;
  dateOfOrder: string;
  orderStatus:
    | "pending"
    | "approved"
    | "disputed"
    | "shipped"
    | "delivered"
    | "settled";
}

interface OrderTextProps {
  order: Order;
}

// Utility function to format currency
const formatCurrency = (value: number) => `₦${value.toFixed(2)}`;

export const OrderText: React.FC<OrderTextProps> = ({ order }) => {
  // Calculate total price directly in the component
  const totalPrice = (order.orderDetails || []).reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <>
      <Block>
        <BlockItem>
          <Heading as="h3">Name of customer</Heading>
          <Input type="text" value={order.customerName || "N/A"} readOnly />
        </BlockItem>
        <BlockItem>
          <Heading as="h3">Order ID</Heading>
          <Input type="text" value={order.orderId || "N/A"} readOnly />
        </BlockItem>
      </Block>

      <BlockItem>
        <Heading as="h3">Customer's Order</Heading>
        <Wrapper>
          {(order.orderDetails || []).map((item, index) => (
            <OrderDetails key={`${item.item}-${index}`}>
              <Item>
                {item.quantityInKg} {item.item}
              </Item>
              <Price>{formatCurrency(item.totalPrice)}</Price>
            </OrderDetails>
          ))}
          <OrderDetails>
            <Item>Tax</Item>
            <Price>{formatCurrency(0)}</Price>
          </OrderDetails>
          <OrderDetails>
            <Item>Shipping fee</Item>
            <Price>{formatCurrency(0)}</Price>
          </OrderDetails>
          <OrderDetails>
            <Item>Total</Item>
            <Price>{formatCurrency(totalPrice)}</Price>
          </OrderDetails>
        </Wrapper>
      </BlockItem>

      <Block>
        <BlockItem>
          <Heading as="h3">Shipping address</Heading>
          <Input type="text" value={order.shippingAddress || "N/A"} readOnly />
        </BlockItem>
        <BlockItem>
          <Heading as="h3">Date of Order</Heading>
          <Input type="text" value={order.dateOfOrder || "N/A"} readOnly />
        </BlockItem>
      </Block>
    </>
  );
};
