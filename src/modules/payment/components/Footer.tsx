import styled from "styled-components";

const FooterText = styled.footer`
  font-size: var(--font-size-sm);
  text-align: center;
`;

const Span = styled.span`
  font-weight: 600;
  text-decoration: underline;
`;

export const Footer = () => {
  return (
    <FooterText>
      By placing an order, you agree to Onefarm{" "}
      <Span>Terms and Conditions</Span> and <Span>Privacy Policy</Span>
    </FooterText>
  );
};
