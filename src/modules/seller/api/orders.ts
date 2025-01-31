export const fetchOrders = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication token is missing");
  }

  console.log("fetchOrders token", token);

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
  console.log("fetchOrders response", response);

  if (!response.success || !Array.isArray(response.data)) {
    throw new Error(
      "Unexpected API response format: orders data is not an array"
    );
  }

  return response.data;
};

export const fetchOrderById = async (id: string) => {
  console.log("Received ID:", id);
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch order with ID: ${id}`);
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

export const updateOrderStatus = async (id: string, status: string) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const updateResponse = await fetch(
      `http://localhost:5000/api/orders/${id}`,
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
      throw new Error(`Failed to update order status for ID: ${id}`);
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
