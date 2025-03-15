import { useMediaQuery } from "react-responsive";
import SearchBar from "../../../shared/ui/SearchBar";
import { CardContainer } from "../components/Card";
import { ProductTabs } from "../components/ProductTabs";
import { PageHeader } from "../../../shared/ui/PageHeader";

export function BuyerDashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <SearchBar />}
      <CardContainer />
      {isMobile && <PageHeader children="Product Catalog" noUnderline />}
      <ProductTabs />
    </>
  );
}
