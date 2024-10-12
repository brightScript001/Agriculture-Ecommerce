import { CardsWrapper } from "../../seller/components/marketplace/Card";
import { Card } from "../../seller/ui/TextCard";
import { useCardList } from "./CardList";

export function CardContainer() {
  const cardList = useCardList();
  return (
    <CardsWrapper>
      {cardList.map((data) => (
        <Card
          key={data.title}
          title={data.title}
          count={data.count}
          description={data.description}
          isCurrency={data.isCurrency}
          aria-label={`Card for ${data.title}`}
          list={data.list}
        />
      ))}
    </CardsWrapper>
  );
}
