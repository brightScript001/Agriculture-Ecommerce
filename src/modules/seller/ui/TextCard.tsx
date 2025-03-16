import styled from "styled-components";
import { formatNumber } from "../utils/formatNumber";

export interface CardProps {
  title: string;
  count?: number;
  description?: string;
  isCurrency?: boolean;
  onClick?: () => void;
  list?: { item: string; discount: string }[];
}

const CardContainer = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  text-align: start;
  padding: 1rem;
  flex: 1;
  min-width: 20.8rem;
  min-height: 10.75rem;
  margin-right: 1rem;

  &:last-child {
    flex: 2;
    background-color: var(--color-primary);
    color: var(--color-text);
  }
`;

const Title = styled.p`
  font-size: var(--font-size-md);
  margin-bottom: 2rem;
`;

const Count = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: var(--font-size-md);

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: var(--font-size-md);
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const DiscountText = styled.span`
  opacity: 0.6;
`;

export const Card: React.FC<CardProps> = ({
  title,
  count,
  description,
  isCurrency,
  onClick,
  list,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      {count !== undefined && <Count>{formatNumber(count, isCurrency)}</Count>}
      {description && <Description>{description}</Description>}
      {list && (
        <ListContainer>
          {list.map((listItem, index) => (
            <ListItem key={index}>
              {listItem.item} -{" "}
              <DiscountText>({listItem.discount} off)</DiscountText>
            </ListItem>
          ))}
        </ListContainer>
      )}
    </CardContainer>
  );
};
