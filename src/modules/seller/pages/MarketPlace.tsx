import UploadProduct from "../components/UploadProduct";
import ProductList from "../components/ProductList";
import CardsContainer from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../shared/ui/Spinner";
import { useMediaQuery } from "react-responsive";
import SearchBar from "../ui/SearchBar";
import { PendingOrderCard } from "../components/PendingOrderCard";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    width: 100%;
`;

function MarketPlace() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { isLoading } = useQuery({
    queryKey: ["products"],
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardsContainer />
      {!isMobile && <UploadProduct />}
      {!isMobile && <ProductList />}
      {isMobile && <PendingOrderCard />}
    </>
  );
}

export default MarketPlace;
