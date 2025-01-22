import { FormData } from "../components/marketplace/CreateProduct";

export const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products");
  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  console.log(res)
  return res.json();
};

export const addProduct = async (newProduct: FormData): Promise<FormData> => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication token is missing");
  }

  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newProduct),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message || "Failed to add product");
  }

  return res.json();
};
