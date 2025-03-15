import styled from "styled-components";

export default function SearchBar() {
  return (
    <SearchContainer>
      <SearchIcon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SearchIcon>
      <SearchInput placeholder="Search" />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  padding: 0 16px 0 40px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ccc;
  }

  &::placeholder {
    color: #999;
  }
`;
