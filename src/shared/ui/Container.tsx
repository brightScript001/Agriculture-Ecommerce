import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;
export default Container;
