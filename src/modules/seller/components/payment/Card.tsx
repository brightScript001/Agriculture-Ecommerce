import styled from "styled-components";

export interface CardProps {
  title: string;
  count: string;
  description: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  color: var(--color-grey-0);
  background-color: var(--color-green-600);
  text-align: start;
  padding: 1rem;
  min-width: 24rem;
  min-height: 10.7rem;
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

export const Card: React.FC<CardProps> = ({
  title,
  count,
  description,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      <Count>{count}</Count>
      <Description>{description}</Description>
    </CardContainer>
  );
};
