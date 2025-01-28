import styled from "styled-components";
import Button from "../../../../shared/ui/Button";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import Heading from "../../../../shared/ui/Heading";
import { OrderList } from "./OrdersList";

type RouteStatus = "pending-orders" | "settled-orders";

interface Props {
  activeButton: RouteStatus;
  handleButtonClick: (buttonType: RouteStatus) => void;
  isActive: (buttonType: RouteStatus) => boolean;
  statusMapping: { [key in RouteStatus]: "pending" | "settled" };
}

const OrderLargeScreen = ({
  activeButton,
  handleButtonClick,
  isActive,
  statusMapping,
}: Props) => {
  return (
    <>
      <Heading as="h1">Orders</Heading>
      <StyledButtonGroup>
        {["pending-orders", "settled-orders"].map((type) => (
          <Button
            key={type}
            variation={isActive(type as RouteStatus) ? "primary" : "secondary"}
            onClick={() => handleButtonClick(type as RouteStatus)}
          >
            {type === "pending-orders" ? "Pending Orders" : "Settled Orders"}
          </Button>
        ))}
      </StyledButtonGroup>
      <List>
        <OrderList status={statusMapping[activeButton]} />
      </List>
    </>
  );
};

export default OrderLargeScreen;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 1.25rem;
  justify-content: flex-start;
`;

const List = styled.div`
  margin-top: 1.25rem;
`;
