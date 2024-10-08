import styled from "styled-components";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import ButtonText from "../../../../shared/ui/ButtonText";

const Item = styled.div<{ noBackground?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border: none;
  background-color: ${(props) =>
    props.noBackground ? "transparent" : "var(--color-grey-0)"};
  border-radius: var(--border-radius-md);
  width: 100%;
`;

const Text = styled.h2`
  font-size: var(--font-size-md);
  font-weight: 500;
`;

interface RecordItemProps {
  title: string;
  noBackground?: boolean;
}

function RecordItem({ title, noBackground = false }: RecordItemProps) {
  return (
    <>
      <Item noBackground={noBackground}>
        <Text>{title}</Text>
        <ButtonGroup>
          <ButtonText style={{ color: "var(--color-green-600)" }}>
            View
          </ButtonText>
          <ButtonText style={{ color: "var(--color-red-600)" }}>
            Delete
          </ButtonText>
          <ButtonText style={{ color: "var(--color-grey-800)" }}>
            Download
          </ButtonText>
        </ButtonGroup>
      </Item>
    </>
  );
}
export default RecordItem;
