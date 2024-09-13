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

export interface DataGridRow {
  id: string;
  customerName: string;
  product: string;
  orderId: string;
  quantity: number;
  price: number;
  dateOfOrder: string;
}

export interface OrderTableProps {
  rows: DataGridRow[];
}

export interface ColumnDef {
  field: keyof DataGridRow;
  headerName: string;
}

export interface OrderListProps {
  status: "pending" | "settled";
}
