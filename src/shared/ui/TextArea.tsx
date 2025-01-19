import styled from "styled-components";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

function TextArea({ placeholder, ...props }: TextAreaProps) {
  return <TextAreaWrapper placeholder={placeholder} {...props} />;
}

export default TextArea;

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