import styled from "styled-components";
import { LiveChat } from "../../../shared/components/support/liveChat/LiveChat";
import SearchBar from "../../../shared/ui/SearchBar";
import { useMediaQuery } from "react-responsive";
import { FAQ } from "../../../shared/components/support/FAQ/FAQ";
import { ContactUs } from "../../../shared/components/support/contactUs/ContactUs";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: auto 0;
    flex-direction: column;
  }
`;

export function BuyerSupport() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardsWrapper>
        <LiveChat route="/buyer/live-chat" />
        <FAQ route="/buyer/faq" />
        <ContactUs route="" />
      </CardsWrapper>
    </>
  );
}