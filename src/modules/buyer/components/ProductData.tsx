export interface Product {
  id: string;
  productName: string;
  description: string;
  costPerKg: number;
  productClass: string;
  numberOfProducts: number;
  sellerId: string;
  imageSrc?: string;
  discount?: number;
  title?: string;
  price?: number;
  originalPrice?: number;
  quantityLeft?: number;
  location?: string;
}
