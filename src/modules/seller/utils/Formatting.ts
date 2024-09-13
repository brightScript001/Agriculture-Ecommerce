export interface OrderDetail {
  item: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

export interface Order {
  customerName: string;
  orderId: string;
  orderDetails: OrderDetail[];
  shippingAddress: string;
  dateOfOrder: string;
  orderStatus:
    | "pending"
    | "approved"
    | "disputed"
    | "shipped"
    | "delivered"
    | "settled";
}

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
