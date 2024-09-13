import styled from "styled-components";
import ButtonText from "./ButtonText";

const StyledButtonText = styled(ButtonText)`
  text-decoration: underline;
`;

function ViewMore() {
  return <StyledButtonText>View more</StyledButtonText>;
}

export default ViewMore;
