import { useNavigate } from "react-router-dom";
import { OrderDetails, useFetchOrderHistory } from "../hooks/fetchOrderHistory";
import SpinnerComponent from "../../../shared/ui/Spinner";
import { FallbackMessage } from "../../../shared/ui/FallbackMessage";
import Table from "../../../shared/ui/Table";
import { OrderStatus } from "./OrderStatus";

export const OrderHistoryTable = () => {
  const { orderHistory, isLoading, isError } = useFetchOrderHistory();
  const navigate = useNavigate();

  if (isLoading) return <SpinnerComponent />;
  if (isError) return <FallbackMessage message="no order history record" />;

  const handleRowClick = (orderId: string) => {
    navigate(`/buyer/order-history/${orderId}`);
  };
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Product</div>
        <div>Order ID</div>
        <div>Price</div>
        <div>Date of Order</div>
        <div>Order Status</div>
      </Table.Header>
      <Table.Body
        data={orderHistory || []}
        render={(order) => (
          <Table.Row
            key={order.orderId.toString()} // Convert orderId to string
            onClick={() => handleRowClick(order.orderId.toString())} // Convert orderId to string
          >
            <div>
              {order.orderDetails
                .map((detail: OrderDetails) => detail.item)
                .join(", ")}
            </div>
            <div>{order.orderId}</div>
            <div>₦{order.price}</div>
            <div>{order.date}</div>
            <OrderStatus status={order.status} />
          </Table.Row>
        )}
      />
    </Table>
  );
};
