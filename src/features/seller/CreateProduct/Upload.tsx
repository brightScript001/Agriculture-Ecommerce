import styled from "styled-components";
import Button from "../../../ui/Button";
import { Title } from "../../../ui/Title";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../../slices/productSlice";
import { AppDispatch, AppState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "../../../ui/Spinner";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 20px;
`;

const ButtonWrapper = styled.div``;

const Text = styled.div`
  display: flex;
`;

const SpanContainer = styled.div`
  background: var(--color-green-200);
  padding: 10px;
  border-radius: var(--border-radius-md);
`;

const Span = styled.div`
  color: var(--color-green-800);
  font-size: var(--font-size-sm);
`;

const StyledTitle = styled(Title)`
  font-size: var(--font-size-lg);
`;

function UploadProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const products = useSelector((state: AppState) => state.product.products);
  const isLoading = useSelector((state: AppState) => state.product.isLoading);
  const error = useSelector((state: AppState) => state.product.error);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <SpinnerComponent />;
  if (error) return <p>{error}</p>;

  const handleAddProductClick = () => {
    navigate("/marketplace/create-product");
  };

  return (
    <Wrapper>
      <Text>
        <StyledTitle>Your Current Uploaded Products</StyledTitle>
        <SpanContainer>
          <Span>{products.length} products</Span>
        </SpanContainer>
      </Text>
      <ButtonWrapper>
        <Button onClick={handleAddProductClick}>+ Add Products</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default UploadProduct;
