import React from "react";
import OrderTable from "./OrdersTable";
import {
  calculateTotalQuantity,
  calculateTotalPrice,
} from "../utils/Formatting";
import { Order, DataGridRow, OrderListProps } from "./OrdersListTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../api/orders";
import toast from "react-hot-toast";
import Spinner from "../../../shared/ui/Spinner";

const generateRows = (
  orders: Order[],
  status: "pending" | "settled"
): DataGridRow[] => {
  console.log("Generating rows for status:", status);
  console.log("Orders before filtering:", orders);

  // Filter orders based on status
  const filteredOrders = orders.filter((order) => order.orderStatus === status);
  console.log("Filtered orders:", filteredOrders);

  return filteredOrders.map((order) => {
    const totalQuantity = calculateTotalQuantity(order);
    const totalPrice = calculateTotalPrice(order);

    const productDetails = order.orderDetails
      .map((detail) => `${detail.item} (${detail.quantityInKg}kg)`)
      .join(", ");

    return {
      id: order.orderId,
      customerName: order.customerName,
      product: productDetails,
      orderId: order.orderId,
      quantity: totalQuantity,
      price: totalPrice,
      dateOfOrder: order.dateOfOrder,
    };
  });
};

export const OrderList: React.FC<OrderListProps> = ({ status }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  console.log("API Data:", data);

  if (isLoading) return <Spinner />;
  if (error) {
    toast.error("Error loading orders");
    return null;
  }

  const orders: Order[] = data || [];
  console.log("Fetched orders:", orders);

  const rows: DataGridRow[] = generateRows(orders, status);
  console.log("Generated rows:", rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <OrderTable rows={rows} />
    </div>
  );
};
