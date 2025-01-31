export const generateId = () => {
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  console.log("Generated Order ID", id);
  return id;
};
