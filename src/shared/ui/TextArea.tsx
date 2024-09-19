import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
  background: var(--color-grey-0);
  padding: 0.6rem;
  border: none;
  border-radius: var(--border-radius-md);
  width: 100%;
  height: 6.3rem;
  resize: vertical;
  font-size: var(--font-size-sm);
`;

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

function TextArea({ placeholder, ...props }: TextAreaProps) {
  return <TextAreaWrapper placeholder={placeholder} {...props} />;
}

export default TextArea;
