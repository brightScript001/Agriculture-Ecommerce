export const fetchOrders = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication token is missing");
  }

  const res = await fetch("http://localhost:5000/api/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  const response = await res.json();

  // Extract the `data` field and validate if it's an array
  if (!response.success || !Array.isArray(response.data)) {
    throw new Error(
      "Unexpected API response format: orders data is not an array"
    );
  }

  return response.data; // Return the actual orders array
};

export const fetchOrderById = async (orderId: string) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch order with ID: ${orderId}`);
    }

    const response = await res.json();

    if (typeof response !== "object" || response === null) {
      throw new Error(
        "Unexpected API response format: order data is not an object"
      );
    }

    return response;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const updateResponse = await fetch(
      `http://localhost:5000/api/orders/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderStatus: status }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error(`Failed to update order status for ID: ${orderId}`);
    }

    const response = await updateResponse.json();

    if (typeof response !== "object" || response === null) {
      throw new Error(
        "Unexpected API response format: updated order data is not an object"
      );
    }

    return response;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
