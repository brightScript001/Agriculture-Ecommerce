import styled from "styled-components";
import ViewMore from "../../../shared/ui/Viewmore";
import PageHeader from "../ui/PageHeader";
import { fetchOrders } from "../api/orders";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import Button from "../../../shared/ui/Button";

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
  orderStatus: string;
}

interface CardProps {
  item: string;
  totalPrice: number;
}

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  height: 200px;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    overflow-x: visible;
    margin-top: 4rem;
  }
  @media (max-width: 769px) {
    padding: 0 2rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  padding: 1rem;
  border: none;
  border-radius: 8px;
  width: 100%;
  width: 20.8125rem;

  scroll-snap-align: start;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const CardItem = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 500;
`;

const CardPrice = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-green-600);
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  width: 297px;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  flex-direction: column;
`;

const DeleteButton = styled(Button)`
  color: var(--color-red-700);
  background-color: var(--color-grey-0);
  border-radius: 0;
  border: 1px solid var(--color-red-300);
`;

// Components
const PendingOrderHeader: React.FC = () => {
  return (
    <PageHeader
      title="Pending Orders"
      RightComponent={<ViewMore />}
      noUnderline
    />
  );
};

const Card: React.FC<CardProps> = ({ item, totalPrice }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardItem>{item}</CardItem>
        <CardPrice>₦{totalPrice.toFixed(2)}</CardPrice>
      </CardContent>
      <StyledButtonGroup>
        <StyledButton>Edit Product</StyledButton>
        <DeleteButton variation="secondary">Delete Product</DeleteButton>
      </StyledButtonGroup>
    </CardWrapper>
  );
};

export const PendingOrderCard: React.FC = () => {
  const { isLoading, error, data } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    select: (data) => data.filter((order) => order.orderStatus === "pending"),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error)
    return <p>An error has occurred: {error.message}</p>;

  const pendingOrders =
    data?.flatMap((order) =>
      order.orderDetails.map((detail) => ({
        item: detail.item,
        totalPrice: detail.totalPrice,
      }))
    ) ?? [];

  return (
    <>
      <PendingOrderHeader />
      <CardsWrapper>
        {pendingOrders.map((order, index) => (
          <Card key={index} item={order.item} totalPrice={order.totalPrice} />
        ))}
      </CardsWrapper>
    </>
  );
};
