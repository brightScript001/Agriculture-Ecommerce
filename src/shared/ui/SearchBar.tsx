import styled from "styled-components";

interface SearchBarProps {
  customStyles?: string;
}

function SearchBar({ customStyles }: SearchBarProps) {
  return (
    <SearchInput type="text" placeholder="Search" customStyles={customStyles} />
  );
}

export default SearchBar;
const SearchInput = styled.input<{ customStyles?: string }>`
  background-color: var(--color-grey-50);
  width: 25.0625rem;
  padding: 1rem;
  font-size: var(--font-size-sm);
  border: none;
  border-radius: var(--border-radius-xl);
  outline: none;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 0 3px var(--color-green-200);
  }

  ${(props) => props.customStyles && props.customStyles}
`;