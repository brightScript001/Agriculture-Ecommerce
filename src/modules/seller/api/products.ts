import { FormData } from "../components/marketplace/CreateProduct";

export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/products");
  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  return res.json();
};

export const addProduct = async (newProduct: FormData): Promise<FormData> => {
  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message || "Failed to add product");
  }

  return res.json();
};
