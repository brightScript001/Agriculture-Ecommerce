import UploadProduct from "../features/seller/CreateProduct/Upload";
import ProductList from "../features/seller/CreateProduct/List";
import CardsContainer from "../features/seller/dashboard/Card";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

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
