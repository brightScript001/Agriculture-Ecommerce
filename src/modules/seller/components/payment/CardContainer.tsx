import styled from "styled-components";
import { Card } from "./Card";
import { useCardList } from "./CardList";

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  height: 12.5rem;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    overflow-x: visible;
    margin-top: 4rem;
  }
`;

export function CardContainer() {
  const cardList = useCardList();
  return (
    <CardsWrapper>
      {cardList.map((data) => (
        <Card
          title={data.title}
          count={data.count}
          description={data.description}
          aria-label={`Card for ${data.title}`}
        />
      ))}
    </CardsWrapper>
  );
}
