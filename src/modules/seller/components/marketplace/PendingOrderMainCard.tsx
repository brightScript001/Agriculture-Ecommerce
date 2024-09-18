import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; // Ensure react-query is installed
import { fetchOrders } from "../../api/orders";
import Button from "../../../../shared/ui/Button";

const Card = styled.div`
  width: 27.8rem;
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-md);
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
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
  color: var(--color-black);
`;

const ArrowIcon = styled.span`
  color: var(--color-grey-500);
`;

const OrderList = styled.div`
  padding: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const CustomerInfo = styled.div`
  font-size: var(--font-size-md);
`;

const CustomerName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const OrderDetails = styled.p`
  color: var(--color-grey-500);
  margin: 0;
  font-size: var(--font-size-sm);
`;

const OrderDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-grey-500);
  margin-left: 1rem;
`;

const ViewButton = styled(Button)`
  background-color: var(--color-green-100);
`;

interface OrderDetail {
  item: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

interface Order {
  orderId: string;
  customerName: string;
  orderDetails: OrderDetail[];
  shippingAddress: string;
  dateOfOrder: string;
  orderStatus: string;
}

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleHeaderClick = () => {
    navigate("/orders/pending-orders");
  };

  const handleViewClick = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };

  const formatOrderDetails = (orderDetails: OrderDetail[]) => {
    return orderDetails
      .slice(0, 2)
      .map((detail) => `${detail.item}`)
      .join(", ");
  };

  return (
    <Card>
      <Header onClick={handleHeaderClick}>
        <HeaderText>Pending Orders</HeaderText>
        <ArrowIcon>➔</ArrowIcon>
      </Header>

      <OrderList>
        {orders.map((order: Order) => (
          <OrderItem key={order.orderId}>
            <CustomerInfo>
              <CustomerName>{order.customerName}</CustomerName>
              <OrderDetails>
                {formatOrderDetails(order.orderDetails)}...{" "}
                <OrderDate>{order.dateOfOrder}</OrderDate>
              </OrderDetails>
            </CustomerInfo>
            <ViewButton
              variation="secondary"
              onClick={() => handleViewClick(order.orderId)}
            >
              View
            </ViewButton>
          </OrderItem>
        ))}
      </OrderList>
    </Card>
  );
};

export default PendingOrdersCard;