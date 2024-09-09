import UploadProduct from "../features/seller/CreateProduct/Upload";
import ProductList from "../features/seller/CreateProduct/List";
import CardsContainer from "../features/seller/dashboard/Card";

function MarketPlace() {
  return (
    <>
      <CardsContainer />
      <UploadProduct />
      <ProductList />
    </>
  );
}

export default MarketPlace;
