export interface Product {
  id: string;
  imageSrc: string;
  discount: number;
  title: string;
  price: number;
  originalPrice: number;
  quantityLeft: number;
  description?: string;
  rating?: number;
  location?: string;
  quantity?: number;
}
