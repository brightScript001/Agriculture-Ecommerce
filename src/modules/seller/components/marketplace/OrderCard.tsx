import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { calculateTotalPrice } from "../../utils/Formatting";

const Card = styled.div`
  padding: 1.5rem;
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-md);
  margin: 1.5rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderId = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-green-600);
  font-weight: 700;
`;

const TotalPrice = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-green-600);
  font-weight: 700;
`;

const DateOfOrder = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-grey-400);
  margin-top: 0.2rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-grey-200);
  margin: 1rem 0;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: var(--font-size-md);
  color: var(--color-grey-700);

  p {
    margin: 0;
  }
`;

const More = styled.p`
  color: var(--color-green-600);
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin-top: 0.3rem;
`;

const CustomerDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const CustomerAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CustomerName = styled.div`
  font-size: var(--font-size-md);
  font-weight: bold;
  margin-left: 0.75rem;
`;

const CustomerAddress = styled.p`
  font-size: var(--font-size-sm);
  font-weight: 400;
  color: var(--color-grey-500);
  margin-top: 0.2rem;
`;

interface OrderDetail {
  item: string;
  quantityInKg: number;
  totalPrice: number;
}

interface Order {
  orderId: string;
  customerName: string;
  orderDetails: OrderDetail[];
  orderStatus: string;
  shippingAddress: string;
  dateOfOrder: string;
}

interface Props {
  order: Order;
}

const OrderCard = ({ order }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/order/${order.orderId}`);
  };

  const totalOrderPrice = calculateTotalPrice(order);
  const displayOrderDetails = order.orderDetails.slice(0, 3);

  return (
    <Card onClick={handleCardClick}>
      <TopRow>
        <OrderId>#{order.orderId}</OrderId>
        <TotalPrice>₦{totalOrderPrice.toFixed(2)}</TotalPrice>
      </TopRow>
      <DateOfOrder>{order.dateOfOrder}</DateOfOrder>
      <Divider />
      <OrderDetails>
        {displayOrderDetails.map((detail) => (
          <p key={detail.item}>
            {detail.quantityInKg}X {detail.item}
          </p>
        ))}
        {order.orderDetails.length > 3 && (
          <More>
            +{order.orderDetails.length - displayOrderDetails.length} more
            orders
          </More>
        )}
      </OrderDetails>
      <Divider />
      <CustomerDetails>
        <CustomerAvatar
          src="/src/assets/images/customerAvatar.png"
          alt={order.customerName}
        />
        <CustomerName>
          {order.customerName}
          <CustomerAddress>Retailer in Abuja</CustomerAddress>
        </CustomerName>
      </CustomerDetails>
    </Card>
  );
};

export default OrderCard;
