import { Order } from "../components/marketplace/OrdersListTypes";
import { apiRequest } from "./apiHelper";

type OrderApiResponse = { _id: string } & Omit<Order, "id">;

export const fetchOrders = async (): Promise<Order[]> => {
  const response = await apiRequest<OrderApiResponse[]>(
    "http://localhost:5000/api/orders",
    "GET"
  );

  if (!Array.isArray(response)) {
    throw new Error(
      "Unexpected API response format: orders data is not an array"
    );
  }

  return response.map((order) => ({
    ...order,
    id: order._id,
  }));
};

export const fetchOrderById = async (id: string): Promise<Order> => {
  // console.log("Fetching Order ID:", id);
  const response = await apiRequest<OrderApiResponse>(
    `http://localhost:5000/api/orders/${id}`,
    "GET"
  );

  return { ...response, id: response._id };
};

export const updateOrderStatus = async (
  id: string,
  status: string
): Promise<void> => {
  await apiRequest<void>(`http://localhost:5000/api/orders/${id}`, "PATCH", {
    orderStatus: status,
  });

  console.log(`✅ Order ${id} updated to status: ${status}`);
};
