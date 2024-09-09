import styled from "styled-components";
import HomeHeader from "../ui/HomeHeader";
import AccountOptions from "../features/home/AccountOption";

const Container = styled.div`
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function HomePage() {
  return (
    <Container>
      <HomeHeader />
      <AccountOptions />
    </Container>
  );
}

export default HomePage;
