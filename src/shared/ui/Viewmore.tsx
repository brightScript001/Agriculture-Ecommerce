import styled from "styled-components";
import ButtonText from "./ButtonText";

interface ViewMoreProps {
  onClick: () => void;
}

const StyledButtonText = styled(ButtonText)`
  text-decoration: underline;
`;

function ViewMore({ onClick }: ViewMoreProps) {
  return <StyledButtonText onClick={onClick}>View more</StyledButtonText>;
}

export default ViewMore;
