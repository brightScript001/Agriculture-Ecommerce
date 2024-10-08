import styled from "styled-components";

const Title = styled.h1`
  font-size: var(--font-size-lg);
  white-space: nowrap;
  color: var(--color-grey-800);
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-grey-700);
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export { Title, Subtitle };
