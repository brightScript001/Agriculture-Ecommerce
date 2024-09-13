import styled from "styled-components";

const FormContainer = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
export default FormContainer;
