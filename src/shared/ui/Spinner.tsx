import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div<{ size?: string; color?: string }>`
  width: ${({ size }) => size || "6.4rem"};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${({ color }) => color || "var(--color-green-600)"} 94%,
        #0000
      )
      top/10px 10px no-repeat,
    conic-gradient(
      #0000 30%,
      ${({ color }) => color || "var(--color-green-600)"}
    ); // Gradient colors
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

// Wrapper to center the spinner
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Spinner component
const SpinnerComponent = ({
  size,
  color,
}: {
  size?: string;
  color?: string;
}) => (
  <SpinnerWrapper>
    <Spinner size={size} color={color} />
  </SpinnerWrapper>
);

export default SpinnerComponent;
