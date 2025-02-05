import React from "react";
import { ProductGrid } from "./ProductGrid";
import { Tabs } from "../../../shared/ui/Tabs";
import SpinnerComponent from "../../../shared/ui/Spinner";
import { useFetchProductsByClass } from "../api/products";

export const ProductTabs: React.FC = () => {
  const {
    data: fruits,
    isLoading: loadingFruits,
    error: errorFruits,
  } = useFetchProductsByClass("Fruits");
  const {
    data: vegetables,
    isLoading: loadingVegetables,
    error: errorVegetables,
  } = useFetchProductsByClass("Vegetables");

  if (loadingFruits || loadingVegetables) return <SpinnerComponent />;

  const errors = [errorFruits, errorVegetables].filter(Boolean);
  if (errors.length) {
    return (
      <div>
        Error fetching products:{" "}
        {errors.map((error, index) => (
          <p key={index}>{error?.message}</p>
        ))}
      </div>
    );
  }

  const tabItems = [
    {
      label: "Vegetables",
      value: "vegetables",
      component: <ProductGrid products={vegetables || []} />,
    },
    {
      label: "Fruits",
      value: "fruits",
      component: <ProductGrid products={fruits || []} />,
    },
  ];

  return <Tabs tabs={tabItems} />;
};
