import styled from "styled-components";
import Heading from "../../../../shared/ui/Heading";
import { formatNumber } from "../../utils/formatNumber";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../shared/ui/Spinner";
import toast from "react-hot-toast";
import { fetchProducts } from "../../api/products";

interface Product {
  id: number;
  imageSrc: string;
  productName: string;
  description: string;
  costPerKg: number;
}

const ProductList: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 60000,
  });

  if (isLoading) return <Spinner />;
  if (error instanceof Error) return toast(error.message);

  return (
    <ProductListWrapper>
      <Heading as="h2">Your Products</Heading>
      <ProductListContainer>
        {Array.isArray(products) &&
          products.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.imageSrc} alt={product.productName} />
              <ProductName>{product.productName}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>
                {formatNumber(product.costPerKg, true)}
              </ProductPrice>
            </ProductCard>
          ))}
      </ProductListContainer>
    </ProductListWrapper>
  );
};

export default ProductList;

const ProductListWrapper = styled.div`
  margin-top: 1.25rem;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.25rem;
`;

const ProductCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1rem;
  background-color: var(--color-background);
`;

const ProductName = styled.h1`
  font-size: var(--font-size-md);
  margin-bottom: 1.0625rem;
`;

const ProductDescription = styled.p`
  font-size: var(--font-size-sm);
  margin-bottom: 1.0625rem;
  color: var(--color-grey-700);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-md);
  margin-bottom: 1.0625rem;
`;
