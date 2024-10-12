import styled from "styled-components";
import { useCardList } from "./CardList";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "../../ui/TextCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/products";
import { UploadIcon } from "../../../../shared/ui/Icons";

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  height: 12.5rem;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    overflow-x: visible;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
`;

const ProductCard = styled.div`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  text-align: start;
  padding: 1rem;
  flex: 1;
  min-width: 20rem;
  min-height: 10rem;
  margin-right: 1rem;

  .upload-icon {
    margin-bottom: 1.6875rem;
  }

  .title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: 1.6875rem;
  }

  .description {
    font-size: var(--font-size-sm);
    margin-top: 0.5rem;
  }
`;

function CardsContainer() {
  const cardList = useCardList();
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;
  const isMarketplace = location.pathname === "/marketplace";

  const { data: products = [], isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleCardClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <CardsWrapper>
      <CardsGrid>
        {isMobile && isMarketplace && (
          <ProductCard
            onClick={() => navigate("/seller/marketplace/create-product")}
          >
            <div className="upload-icon">
              <img src={UploadIcon} alt="" />
            </div>
            <div className="title">Upload your product</div>
            <div className="description">
              {isLoadingProducts
                ? "Loading..."
                : `${products.length} products uploaded so far`}
            </div>
          </ProductCard>
        )}

        {cardList.map((data) => (
          <Card
            key={data.navigateTo}
            title={data.title}
            count={data.count}
            description={data.description}
            isCurrency={data.isCurrency}
            onClick={() => handleCardClick(data.navigateTo)}
            aria-label={`Card for ${data.title}`}
          />
        ))}
      </CardsGrid>
    </CardsWrapper>
  );
}

export default CardsContainer;
