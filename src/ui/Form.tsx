import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 31.25rem;
  margin: 0;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export default Form;
