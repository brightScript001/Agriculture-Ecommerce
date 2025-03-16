import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../api/orders";
import Button from "../../../../shared/ui/Button";
import SpinnerComponent from "../../../../shared/ui/Spinner";
import { Order, OrderDetail } from "./OrdersListTypes";
import { ChevronRight } from "lucide-react";

const PendingOrdersCard = () => {
  const navigate = useNavigate();

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleHeaderClick = () => {
    navigate("/seller/orders/status/pending-orders");
  };

  const handleViewClick = (id: string) => {
    navigate(`/seller/order/${id}`);
  };

  const formatOrderDetails = (orderDetails: OrderDetail[]) => {
    return orderDetails
      .slice(0, 2)
      .map((detail) => `${detail.item}`)
      .join(", ");
  };

  const PendingOrders = orders.filter(
    (order: Order) => order.orderStatus === "pending"
  );

  return (
    <Card>
      <Header>
        <HeaderText>Pending Orders</HeaderText>
        <Button variation="unstyled" onClick={handleHeaderClick}>
          <ChevronRight size={32} color="black" />
        </Button>
      </Header>
      {PendingOrders.length > 0 ? (
        <OrderList>
          {PendingOrders.map((order: Order) => (
            <OrderItem key={order.id}>
              <CustomerInfo>
                <CustomerName>{order.customerName}</CustomerName>
                <OrderDetails>
                  {formatOrderDetails(order.orderDetails)}...{" "}
                  <OrderDate>{order.dateOfOrder}</OrderDate>
                </OrderDetails>
              </CustomerInfo>
              <Button
                variation="secondary"
                onClick={() => handleViewClick(order.id)}
              >
                View
              </Button>
            </OrderItem>
          ))}
        </OrderList>
      ) : (
        <NoOrdersText>No pending orders available</NoOrdersText>
      )}
    </Card>
  );
};

export default PendingOrdersCard;

const Card = styled.div`
  width: 27.8rem;
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-lg);
  font-weight: bold;
  border-bottom: 1px solid var(--color-grey-200);
`;

const HeaderText = styled.span`
  color: var(--color-text);
`;

const OrderList = styled.div`
  padding: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const CustomerInfo = styled.div`
  font-size: var(--font-size-md);
`;

const CustomerName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const OrderDetails = styled.p`
  color: var(--color-text);
  margin: 0;
  font-size: var(--font-size-sm);
`;

const OrderDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-text);
  margin-left: 1rem;
`;

const NoOrdersText = styled.p`
  text-align: center;
  padding: 1rem;
  color: var(--color-text);
  font-size: var(--font-size-md);
`;
