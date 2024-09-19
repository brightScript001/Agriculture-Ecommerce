export const fetchOrders = async () => {
  const res = await fetch("http://localhost:8000/orders");
  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }
  return res.json();
};

export const fetchOrderById = async (orderId: string) => {
  try {
    const orders = await fetchOrders();

    const order = orders.find(
      (order: { orderId: string }) => order.orderId === orderId
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

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const order = await fetchOrderById(orderId);

    if (!order) {
      throw new Error(`Order not found: ${orderId}`);
    }

    const updateResponse = await fetch(
      `http://localhost:8000/orders/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderStatus: status }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error(`Failed to update order status for ID: ${orderId}`);
    }

    return await updateResponse.json();
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
