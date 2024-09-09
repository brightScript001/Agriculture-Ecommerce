import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type OrderStatus =
  | "pending"
  | "approved"
  | "disputed"
  | "shipped"
  | "delivered"
  | "settled";

interface OrderDetail {
  id: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

interface Order {
  customerName: string;
  orderId: string;
  orderDetails: OrderDetail[];
  shippingAddress: string;
  dateOfOrder: string;
  orderStatus: OrderStatus;
}

interface OrderState {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  isLoading: false,
  error: null,
};

//Async thunk to fetch orders
export const fetchOrders = createAsyncThunk<Order[]>(
  "orders/fetchOrders",
  async () => {
    const res = await fetch("http://localhost:8000/orders");
    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }
    return res.json();
  }
);

//Async thunk to update order status
export const updateOrderStatus = createAsyncThunk<
  Order,
  { orderId: string; status: OrderStatus }
>("orders/updateOrderStatus", async ({ orderId, status }) => {
  const res = await fetch(`http://localhost:8000/orders/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderStatus: status }),
  });
  if (!res.ok) {
    throw new Error("Failed to update order status");
  }
  return res.json();
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    disputeOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find(
        (order) => order.orderId === action.payload
      );
      if (order && order.orderStatus === "pending") {
        order.orderStatus = "disputed";
      }
    },
  },
  extraReducers: (builder) => {
    //fetching orders
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.isLoading = false;
          state.orders = action.payload;
        }
      )
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "failed to fetch orders";
      });

    //updating order status
    builder
      .addCase(updateOrderStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateOrderStatus.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.isLoading = false;
          const index = state.orders.findIndex(
            (order) => order.orderId === action.payload.orderId
          );
          if (index !== -1) {
            state.orders[index] = action.payload;
          }
        }
      )
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "failed to update order status";
      });
  },
});

export const { disputeOrder } = orderSlice.actions;
export default orderSlice.reducer;
