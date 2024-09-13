export const formatNumber = (
  num: number,
  currency: boolean = false
): string => {
  if (currency) {
    return `₦${num.toLocaleString()}`;
  }
  return num.toLocaleString();
};
