import CardsContainer from "../components/marketplace/Card";
import { useMediaQuery } from "react-responsive";
import SearchBar from "../../../shared/ui/SearchBar";
import PendingOrderMainCard from "../components/marketplace/PendingOrderMainCard";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    width: 100%;
`;

export function SellerDashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardsContainer />
      {!isMobile && <PendingOrderMainCard />}
    </>
  );
}