import { useSelector } from "react-redux";
import { AppState } from "../store";

export const calculateTotalPrice = (customerId: string): number => {
  const orders = useSelector((state: AppState) => state.orders.orders) ?? [];

  const customerOrder = orders.find((order) => order.orderId === customerId);

  if (!customerOrder) {
    return 0;
  }

  return customerOrder.orderDetails.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
};
