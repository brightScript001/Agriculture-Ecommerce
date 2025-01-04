import { useNavigate } from "react-router-dom";
import { CardProps } from "@seller/ui/TextCard";

export const useCardList = () => {
  const navigate = useNavigate();
  const cardList: CardProps[] = [
    {
      title: "Your Orders",
      count: 93,
      description: "7% increase from last month",
      onClick() {
        navigate("/seller/orders");
      },
    },
    {
      title: "Top discounts today",
      list: [
        { item: "Banana", discount: "15%" },
        { item: "Strawberry", discount: "10%" },
        { item: "Irish Potatoes", discount: "20%" },
      ],
    },
  ];
  return cardList;
};
