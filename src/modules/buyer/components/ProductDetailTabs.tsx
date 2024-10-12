import React from "react";
import { Tabs } from "../../../shared/ui/Tabs";
import { Product } from "../components/ProductData";
import { FallbackMessage } from "../../../shared/ui/FallbackMessage";

interface ProductTabsProps {
  product: Product;
}

export const ProductDetailsTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const descriptionTabContent = product.description ? (
    <p>{product.description}</p>
  ) : (
    <FallbackMessage message="No description available for this product." />
  );

  const ratingTabContent = product.rating ? (
    <div>
      <p>Average Rating: {product.rating}</p>
    </div>
  ) : (
    <FallbackMessage message="No ratings available for this product." />
  );

  const tabs = [
    {
      label: "Description",
      value: "description",
      component: descriptionTabContent,
    },
    { label: "Rating", value: "rating", component: ratingTabContent },
  ];

  return <Tabs tabs={tabs} />;
};
