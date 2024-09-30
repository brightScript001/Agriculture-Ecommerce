import styled from "styled-components";
import { LiveChat } from "../components/support/liveChat/LiveChat";
import SearchBar from "../ui/SearchBar";
import { useMediaQuery } from "react-responsive";
import { FAQ } from "../components/support/FAQ/FAQ";
import { ContactUs } from "../components/support/contactUs/ContactUs";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin: auto 0;
    flex-direction: column;
    margin-top: 0;
  }
`;

function Support() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardsWrapper>
        <LiveChat route="/live-chat" />
        <FAQ route="/faq" />
        <ContactUs route="" />
      </CardsWrapper>
    </>
  );
}

export default Support;
