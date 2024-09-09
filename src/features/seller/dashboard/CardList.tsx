import { useSelector } from "react-redux";
import { AppState } from "../../../store";

interface Order {
  orderStatus: string;
  orderDetails: { totalPrice: number }[];
}

interface Card {
  title: string;
  count: number;
  description: string;
  isCurrency?: boolean;
  navigateTo: string;
}

export const GetCardList = (): Card[] => {
  const orders: Order[] =
    useSelector((state: AppState) => state.orders.orders) ?? [];

  const pendingOrdersCount = orders.filter(
    (order) => order.orderStatus === "pending"
  ).length;

  const settledOrdersCount = orders.filter(
    (order) => order.orderStatus === "settled"
  ).length;

  const calculateTotalRevenue = (orders: Order[]): number => {
    return orders
      .filter((order: Order) => order.orderStatus === "settled")
      .reduce<number>((acc, order) => {
        return (
          acc +
          (order.orderDetails?.length
            ? order.orderDetails.reduce<number>(
                (orderAcc, item) => orderAcc + item.totalPrice,
                0
              )
            : 0)
        );
      }, 0);
  };

  const totalRevenue = calculateTotalRevenue(orders);

  const cardList: Card[] = [
    {
      title: "Pending Orders",
      count: pendingOrdersCount,
      description: "28% increase from last month",
      navigateTo: "/orders/pending-orders",
    },
    {
      title: "Settled Orders",
      count: settledOrdersCount,
      description: "82% customer satisfaction",
      navigateTo: "/orders/settled-orders",
    },
    {
      title: "Your Revenue",
      count: totalRevenue,
      isCurrency: true,
      description: "17% increase",
      navigateTo: "/revenue",
    },
  ];

  return cardList;
};
