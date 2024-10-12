import React from "react";
import { ProductGrid } from "./ProductGrid";
import { Tabs } from "../../../shared/ui/Tabs";
import { useProducts } from "../hooks/useProduct";
import SpinnerComponent from "../../../shared/ui/Spinner";

export const ProductTabs: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const fruits = products?.fruits || [];
  const vegetables = products?.vegetables || [];

  const tabItems = [
    {
      label: "Vegetables",
      value: "vegetables",
      component: <ProductGrid products={vegetables} />,
    },
    {
      label: "Fruits",
      value: "fruits",
      component: <ProductGrid products={fruits} />,
    },
  ];

  return <Tabs tabs={tabItems} />;
};
