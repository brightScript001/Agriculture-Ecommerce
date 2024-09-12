export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/products");
  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  return res.json();
};
