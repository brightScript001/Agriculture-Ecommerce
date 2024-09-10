import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export function DisplayProducts() {
  const { data: products, isLoading } = useQuery(["products"], fetchProducts, {
    staleTime: 100 * 60 * 10,
    onError: (error) => {
      toast(`Error ${error.message}`);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products &&
          products.map((product) => <li key={product.id}>{product.id}</li>)}
      </ul>
    </div>
  );
}
