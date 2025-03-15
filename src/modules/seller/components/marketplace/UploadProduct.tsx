import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Title } from "../../../../shared/ui/Title";
import { fetchProducts } from "../../api/products";
import Button from "../../../../shared/ui/Button";

function UploadProduct() {
  const navigate = useNavigate();
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleAddProductClick = () => {
    navigate("/seller/marketplace/create-product");
  };

  return (
    <Wrapper>
      <Text>
        <StyledTitle>Your Current Uploaded Products</StyledTitle>
        <Span>{products?.length} products</Span>
      </Text>
      <ButtonWrapper>
        <Button onClick={handleAddProductClick}>+ Add Products</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default UploadProduct;

const Wrapper = styled.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
  width: 100%;
`;

const ButtonWrapper = styled.div``;

const Text = styled.div`
  display: flex;
`;

const Span = styled.div`
  background: var(--color-primary);
  border-radius: var(--border-radius-md);
  padding: 0.5rem;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`;

const StyledTitle = styled(Title)`
  font-size: var(--font-size-lg);
`;
