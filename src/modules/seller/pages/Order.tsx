import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerComponent from "../../../shared/ui/Spinner";
import useMediaQuery from "../../../shared/hooks/useMediaQuery";
import OrderLargeScreen from "../components/marketplace/OrderLargeScreen";
import OrderMobileScreen from "../components/marketplace/OrderMobileScreen";

const Wrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 0%;
  }
`;

type RouteStatus = "pending-orders" | "settled-orders";

const statusMapping: { [key in RouteStatus]: "pending" | "settled" } = {
  "pending-orders": "pending",
  "settled-orders": "settled",
};

const Order = () => {
  const { status } = useParams<{ status: RouteStatus }>();
  const [activeButton, setActiveButton] =
    useState<RouteStatus>("pending-orders");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (status && status in statusMapping) {
      setActiveButton(status as RouteStatus);
      setLoading(false);
    } else {
      navigate("/orders/pending-orders");
    }
  }, [status, navigate]);

  const handleButtonClick = (buttonType: RouteStatus) => {
    setActiveButton(buttonType);
    navigate(`/orders/${buttonType}`);
  };

  const isActive = (buttonType: RouteStatus) => activeButton === buttonType;

  if (loading) {
    return <SpinnerComponent />;
  }

  return (
    <Wrapper>
      {isMobile ? (
        <OrderMobileScreen
          activeButton={activeButton}
          statusMapping={statusMapping}
          handleButtonClick={handleButtonClick}
          isActive={isActive}
        />
      ) : (
        <OrderLargeScreen
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
          isActive={isActive}
          statusMapping={statusMapping}
        />
      )}
    </Wrapper>
  );
};

export default Order;
