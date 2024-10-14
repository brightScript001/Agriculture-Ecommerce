export const generateOrderID = () => {
  const orderID = Math.random().toString(36).substring(2, 10).toUpperCase();
  console.log("Generated Order ID", orderID);
  return orderID;
};
