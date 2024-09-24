import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import Button from "../../../shared/ui/Button";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import FormFields from "../components/inventory/FormField";
import { useState } from "react";

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
  const { title, mode = "add", row } = location.state || {};
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setIsDeleting(true);
      console.log("Record deleted successfully.");
      setIsDeleting(false);
      navigate(-1);
    }
  };

  const handleFormSubmit = () => {
    if (mode === "add") {
      console.log("Adding new record...");
      // Add logic for creating a new record
    } else if (mode === "update") {
      console.log("Updating record...");
      // Add logic for updating the record
    }
    navigate(-1); // Navigate back after form submission
  };

  const isViewMode = mode === "view";

  return (
    <Wrapper>
      <Heading as="h1">
        {isViewMode
          ? `Viewing details of ${title}`
          : `${mode === "add" ? "Add an update on " : "Update"} ${title}`}
      </Heading>
      <Block>
        <FormFields title={title} record={row} readOnly={isViewMode} />
        <StyledButtonGroup>
          <StyledButtonCancel
            size="medium"
            variation="secondary"
            onClick={handleCancel}
            disabled={isDeleting}
          >
            Cancel
          </StyledButtonCancel>

          {isViewMode ? (
            <>
              <StyledButton
                size="medium"
                variation="danger"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </StyledButton>
              <StyledButton
                size="medium"
                variation="primary"
                onClick={() => navigate(`/update/${row.id}`)}
              >
                Update
              </StyledButton>
            </>
          ) : (
            <StyledButton
              size="medium"
              variation="primary"
              onClick={handleFormSubmit}
            >
              {mode === "add" ? "Add Update" : "Update"}
            </StyledButton>
          )}
        </StyledButtonGroup>
      </Block>
    </Wrapper>
  );
}

export default AddUpdate;
