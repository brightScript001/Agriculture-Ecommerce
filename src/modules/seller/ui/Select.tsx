import styled from "styled-components";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectWrapper = styled.select`
  padding: 0.6rem;
  background: var(--color-white-100);
  border: none;
  border-radius: var(--border-radius-md);
  width: 100%;
  font-size: var(--font-size-sm);
`;

const Option = styled.option`
  font-size: var(--font-size-sm);
`;

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return <SelectWrapper {...props}>{children}</SelectWrapper>;
};

const OptionComponent: React.FC<OptionProps> = ({ children, ...props }) => {
  return <Option {...props}>{children}</Option>;
};

export { Select, OptionComponent as Option };
