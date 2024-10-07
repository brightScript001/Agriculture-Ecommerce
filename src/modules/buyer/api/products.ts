export const fetchProducts = async () => {
  const fruitsResponse = await fetch("http://localhost:8000/fruits");
  if (!fruitsResponse.ok) {
    throw new Error("Failed to fetch fruits");
  }
  const fruits = await fruitsResponse.json();

  const vegetablesResponse = await fetch("http://localhost:8000/vegetables");
  if (!vegetablesResponse.ok) {
    throw new Error("Failed to fetch vegetables");
  }
  const vegetables = await vegetablesResponse.json();

  return { fruits, vegetables };
};
