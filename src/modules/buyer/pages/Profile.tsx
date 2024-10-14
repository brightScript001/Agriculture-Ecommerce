import { useMediaQuery } from "react-responsive";
import { PersonalInformation } from "../../../shared/components/PersonalInformation";
import SearchBar from "../../../shared/ui/SearchBar";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    width: 100%;
`;

export function BuyerProfile() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <PersonalInformation />;
    </>
  );
}
