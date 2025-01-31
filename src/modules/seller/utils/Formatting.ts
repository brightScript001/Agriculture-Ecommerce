import { Order, OrderDetail } from "../components/marketplace/OrdersListTypes";

export const calculateTotalQuantity = (order: Order): number =>
  order.orderDetails.reduce(
    (sum: number, detail: OrderDetail) => sum + detail.quantityInKg,
    0
  );

export const calculateTotalPrice = (order: Order): number =>
  order.orderDetails.reduce(
    (sum: number, detail: OrderDetail) => sum + detail.totalPrice,
    0
  );

export const truncateText = (text: string, length: number): string =>
  text.length > length ? text.substring(0, length) + "...etc" : text;
