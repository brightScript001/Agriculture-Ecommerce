export interface Product {
  id: string;
  imageSrc: string;
  discount: number;
  title: string;
  price: string;
  originalPrice: string;
  quantityLeft: number;
  description?: string;
  rating?: number;
  location?: string;
}
