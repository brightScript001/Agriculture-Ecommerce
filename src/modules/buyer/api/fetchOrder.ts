export const fetchOrdersHistory = async () => {
  const response = await fetch("http://localhost:8000/OrderHistory");

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  const orderHistory = await response.json();
  return orderHistory;
};

export const fetchOrderById = async (orderId: string) => {
  try {
    const orders = await fetchOrdersHistory();

    const order = orders.find(
      (order: { orderId: number }) => order.orderId === parseInt(orderId)
    );

    if (!order) {
      throw new Error(`Order not found: ${orderId}`);
    }

    return order;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};
