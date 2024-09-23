import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import Button from "../../../shared/ui/Button";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import FormFields from "../components/inventory/FormField";

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 60%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0;
  }
`;

const Block = styled.div``;

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    border-radius: var(--border-radius-sm);
  }
`;
const StyledButtonCancel = styled(StyledButton)`
  color: var(--color-green-700);
  border: 1px solid var(--color-green-300);
`;

const StyledButtonGroup = styled(ButtonGroup)`
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

function AddUpdate() {
  const location = useLocation();
  const { title } = location.state || {};
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Heading as="h1">Add an update on {title}</Heading>
      <Block>
        <FormFields title={title} />
        <StyledButtonGroup>
          <StyledButtonCancel
            size="medium"
            variation="secondary"
            onClick={handleCancel}
          >
            Cancel
          </StyledButtonCancel>
          <StyledButton size="medium" variation="primary">
            Add Update
          </StyledButton>
        </StyledButtonGroup>
      </Block>
    </Wrapper>
  );
}

export default AddUpdate;
