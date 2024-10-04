import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Title } from "../../../../shared/ui/Title";
import { fetchProducts } from "../../api/products";
import Button from "../../../../shared/ui/Button";

const Wrapper = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
`;

const ButtonWrapper = styled.div``;

const Text = styled.div`
  display: flex;
`;

const Span = styled.div`
  background: var(--color-green-200);
  border-radius: var(--border-radius-md);
  padding: 0.5rem;
  color: var(--color-green-800);
  font-size: var(--font-size-sm);
`;

const StyledTitle = styled(Title)`
  font-size: var(--font-size-lg);
`;

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
