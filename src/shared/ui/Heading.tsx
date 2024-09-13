import styled, { css } from "styled-components";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
}

const Heading = styled.h1<HeadingProps>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--font-size-xl);
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--font-size-lg);
      font-weight: 600;
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--font-size-md);
      font-weight: 600;
    `}
    
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: var(--font-size-sm);
      font-weight: 400;
      text-align: center;
    `}
    
  line-height: 1.4;
`;

export default Heading;
