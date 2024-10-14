import { useQuery } from "@tanstack/react-query";
import { fetchOrderById, fetchOrdersHistory } from "../api/fetchOrder";
import { useParams } from "react-router-dom";

export interface OrderDetails {
  item: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

export interface OrderHistory {
  name: string;
  orderId: string;
  orderDetails: OrderDetails[];
  price: number;
  date: string;
  status: "Pending" | "Approved" | "Delivered";
  deliveryDate: string;
  address: string;
}

export const useFetchOrderHistory = () => {
  const {
    data: orderHistory,
    isLoading,
    isError,
  } = useQuery<OrderHistory[]>({
    queryKey: ["orders-history"],
    queryFn: fetchOrdersHistory,
  });

  return { orderHistory, isLoading, isError };
};

export const useFetchOrderById = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders-history", orderId],
    queryFn: () => fetchOrderById(orderId!),
    enabled: !!orderId,
  });

  return {
    data: order,
    isLoading,
    isError,
    error,
  };
};
