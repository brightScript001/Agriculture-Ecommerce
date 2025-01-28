import styled from "styled-components";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import OrderCard from "./OrderCard";
import { fetchOrders } from "../../api/orders";
import SpinnerComponent from "../../../../shared/ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { Order } from "../../utils/Formatting";

type RouteStatus = "pending-orders" | "settled-orders";

interface Props {
  activeButton: RouteStatus;
  statusMapping: { [key in RouteStatus]: "pending" | "settled" };
  handleButtonClick: (buttonType: RouteStatus) => void;
  isActive: (buttonType: RouteStatus) => boolean;
}

const OrderMobileScreen = ({
  activeButton,
  statusMapping,
  isActive,
  handleButtonClick,
}: Props) => {
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <SpinnerComponent />;
  if (error) return <div>Error fetching orders</div>;

  const filteredOrders = orders?.filter(
    (order: Order) => order.orderStatus === statusMapping[activeButton]
  );

  return (
    <List>
      <HeaderWrapper>
        <StyledButtonGroup>
          {["pending-orders", "settled-orders"].map((type) => (
            <StyledButtonText
              key={type}
              onClick={() => handleButtonClick(type as RouteStatus)}
              isActive={isActive(type as RouteStatus)}
            >
              {type === "pending-orders" ? "Pending Orders" : "Settled Orders"}
            </StyledButtonText>
          ))}
        </StyledButtonGroup>
      </HeaderWrapper>

      {filteredOrders?.map((order: Order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </List>
  );
};

export default OrderMobileScreen;

const List = styled.div`
  margin-top: 1.25rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1.9rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
`;

const StyledButtonGroup = styled(ButtonGroup)`
  justify-content: flex-start;
`;

const StyledButtonText = styled.h2<{ isActive: boolean }>`
  font-size: var(--font-size-md);
  font-weight: 500;
  color: ${(props) =>
    props.isActive ? "var(--color-green-500)" : "var(--color-grey-800)"};
  border-bottom: ${(props) =>
    props.isActive
      ? "2px solid var(--color-green-500)"
      : "2px solid transparent"};
  width: ${(props) => (props.isActive ? "9.9rem" : "auto")};
  transition: all 0.3s ease;
  text-align: center;
`;
