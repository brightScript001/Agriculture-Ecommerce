import UploadProduct from "../components/UploadProduct";
import ProductList from "../components/ProductList";
import CardsContainer from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../shared/ui/Spinner";

function MarketPlace() {
  const { isLoading } = useQuery({
    queryKey: ["products"],
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      <CardsContainer />
      <UploadProduct />
      <ProductList />
    </>
  );
}

export default MarketPlace;
