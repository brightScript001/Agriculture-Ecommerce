import { useMediaQuery } from "react-responsive";
import { PersonalInformation } from "../../../shared/components/PersonalInformation";
import SearchBar from "../../../shared/ui/SearchBar";

export function BuyerProfile() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <SearchBar />}
      <PersonalInformation />;
    </>
  );
}
