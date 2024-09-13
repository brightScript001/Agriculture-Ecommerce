import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
  color: var(--color-grey-700);
  outline: none;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 0 3px var(--color-green-200);
  }
`;

export default StyledSelect;
