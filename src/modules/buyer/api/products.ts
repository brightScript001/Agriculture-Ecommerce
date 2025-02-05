import { useQuery } from "@tanstack/react-query";
import { Product } from "../components/ProductData";
const API_BASE_URL = "http://localhost:5000/api/products";

const transformProduct = (product: any): Product => ({
  ...product,
  id: product._id, // Ensure _id is mapped to id
});

export const fetchAllProducts = async (): Promise<Product[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Authentication required");

  const res = await fetch(`${API_BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await res.json();
  console.log("API Raw Response (All Products):", response);

  // If response is an object, try extracting the data field
  const products = Array.isArray(response) ? response : response.data;

  if (!Array.isArray(products)) {
    throw new Error("Invalid response format: Expected an array");
  }

  return products.map(transformProduct);
};

export const fetchProductsByClass = async (
  productClass: string
): Promise<Product[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Authentication required");

  const res = await fetch(`${API_BASE_URL}/class/${productClass}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await res.json();
  console.log(`API Raw Response (Products for ${productClass}):`, response);

  const products = Array.isArray(response) ? response : response.data;

  if (!Array.isArray(products)) {
    throw new Error("Invalid response format: Expected an array");
  }

  return products.map(transformProduct);
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Authentication required");

  console.log("Fetching Product ID:", id);

  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }

  const response = await res.json();
  console.log("API Response (Single Product):", response);

  if (!response || typeof response !== "object") {
    throw new Error("Invalid response format: Expected an object");
  }

  return transformProduct(response);
};

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFetchProductsByClass = (productClass: string) => {
  return useQuery({
    queryKey: ["products", productClass],
    queryFn: () => fetchProductsByClass(productClass),
    enabled: !!productClass, // Only fetch if class is provided
  });
};

export const useFetchProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only fetch if id is available
  });
};
