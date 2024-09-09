import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  /* justify-content: center; */
`;

const Img = styled.img`
  display: block;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/Assets/images/Onefarm-Logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
