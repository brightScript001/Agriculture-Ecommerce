import React from "react";
import styled from "styled-components";
import Heading from "../../../../shared/ui/Heading";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlockItem = styled.div`
  width: 100%;
  margin: auto 0;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Input = styled.input`
  width: 30rem;
  padding: 0.625rem;
  min-height: 4rem;
  font-size: var(--font-size-sm);
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  margin: 0.314rem 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.63rem;
`;

const Item = styled.span`
  font-size: var(--font-size-sm);
`;

const Price = styled.span`
  font-size: var(--font-size-sm);
`;

const Wrapper = styled.div`
  padding: 0.63rem;
  background: var(--color-white-100);
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
`;

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

const formatCurrency = (value: number) => `₦${value.toFixed(2)}`;

export const OrderText: React.FC<OrderTextProps> = ({ order }) => {
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
