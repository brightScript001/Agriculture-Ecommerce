import CardsContainer from "../components/Card";
import { useMediaQuery } from "react-responsive";
import SearchBar from "../ui/SearchBar";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    width: 100%;
`;

function SellerDashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardsContainer />
    </>
  );
}

export default SellerDashboard;
