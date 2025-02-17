import styled from "styled-components";

export const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem;
  overflow: scroll;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  margin-top: 7rem;
`;

export const PageHeaderWrapper = styled.div``;
