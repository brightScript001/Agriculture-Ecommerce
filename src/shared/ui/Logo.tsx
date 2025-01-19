import styled from "styled-components";

function Logo() {
  return (
    <StyledLogo>
      <Img src="/src/assets/images/Onefarm-Logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

const StyledLogo = styled.div`
  display: flex;
`;

const Img = styled.img`
  display: block;
`;