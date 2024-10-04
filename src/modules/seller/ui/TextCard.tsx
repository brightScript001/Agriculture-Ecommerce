import styled from "styled-components";
import { formatNumber } from "../utils/formatNumber";

interface CardProps {
  title: string;
  count: number;
  description: string;
  isCurrency?: boolean;
  onClick: () => void;
}

const CardContainer = styled.div`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  text-align: start;
  padding: 1rem;
  flex: 1;
  min-width: 20rem;
  min-height: 10rem;
  margin-right: 1rem;

  &:last-child {
    flex: 2;
    background-color: var(--color-green-600);
    color: var(--color-grey-0);

    .dark-mode & {
      background-color: var(--color-green-600);
      color: var(--color-grey-0);
    }
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

const Card: React.FC<CardProps> = ({
  title,
  count,
  description,
  isCurrency,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      <Count>{formatNumber(count, isCurrency)}</Count>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
