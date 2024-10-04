import { CardProps } from "./Card";

export const useCardList = (): CardProps[] => {
  const cardList: CardProps[] = [
    {
      title: "Your Earnings this month",
      count: "N4,331,912",
      description: "17% less than last month (N4,995,013)",
    },
    {
      title: "Number of products sold this month",
      count: "661 products",
      description: "12% less than last month",
    },
    {
      title: "Number of Customers",
      count: "92",
      description: "28% increase from last month",
    },
  ];
  return cardList;
};
