import { useMediaQuery } from "react-responsive";
import SearchBar from "../ui/SearchBar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

function InventoryDashboard() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Wrapper>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <div>
        <Heading as="h2" onClick={() => navigate("/farm-records")}>
          Farm General Records (Last Updated April 29, 2024)
        </Heading>
        <Heading as="h2" onClick={() => navigate("/supplies-records")}>
          Supplies Record (Last Updated April 17, 2024)
        </Heading>
        <Heading as="h2" onClick={() => navigate("/risk-emergency-records")}>
          Risk and Emergency Record (Last Updated April 17, 2024)
        </Heading>
        <Heading as="h2" onClick={() => navigate("/equipment-records")}>
          Equipment and Maintenance (Last Updated April 17, 2024)
        </Heading>
      </div>
    </Wrapper>
  );
}

export default InventoryDashboard;
