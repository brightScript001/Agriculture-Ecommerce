import styled from "styled-components";
import { LiveChat } from "../components/support/liveChat/LiveChat";
import SearchBar from "../ui/SearchBar";
import { useMediaQuery } from "react-responsive";
import { FAQ } from "../components/support/FAQ/FAQ";
import { ContactUs } from "../components/support/contactUs/ContactUs";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: auto 0;
    flex-direction: column;
  }
`;

export function Support() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const role = useSelector((state: AppState) => state.auth.role);

  const baseRoute = role === "seller" ? "/seller" : "/buyer";

  return (
    <>
      {isMobile && <SearchBar />}
      <CardsWrapper>
        <LiveChat route={`${baseRoute}/support/live-chat`} />
        <FAQ route={`${baseRoute}/support/faq`} />
        <ContactUs route={`${baseRoute}/support/contact-us`} />
      </CardsWrapper>
    </>
  );
}
