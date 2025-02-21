import { useMediaQuery } from "react-responsive";
import SearchBar from "@shared/ui/SearchBar";
import { useNavigate } from "react-router-dom";
import Heading from "@shared/ui/Heading";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

export function InventoryDashboard() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <main>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <div>
        <Heading as="h2" onClick={() => navigate("/seller/farm-records")}>
          Farm General Records (Last Updated April 29, 2024)
        </Heading>
        <Heading as="h2" onClick={() => navigate("/seller/supplies-records")}>
          Supplies Record (Last Updated April 17, 2024)
        </Heading>
        <Heading
          as="h2"
          onClick={() => navigate("/seller/risk-emergency-records")}
        >
          Risk and Emergency Record (Last Updated April 17, 2024)
        </Heading>
        <Heading as="h2" onClick={() => navigate("/seller/equipment-records")}>
          Equipment and Maintenance (Last Updated April 17, 2024)
        </Heading>
      </div>
    </main>
  );
}
