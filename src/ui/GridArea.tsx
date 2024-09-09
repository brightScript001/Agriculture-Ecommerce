import styled from "styled-components";

const GridContainer = styled.div`
  grid-area: search-bar;
  overflow-y: auto;
`;

function GridArea() {
  return <GridContainer />;
}

export default GridArea;
