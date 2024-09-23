import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";
import RecordTable from "./RecordTable";

const Container = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.25rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  text-decoration: underline;
  font-size: var(--font-size-lg);
`;

interface RecordCardProps {
  title: string;
}

function RecordCard({ title }: RecordCardProps) {
  const navigate = useNavigate();

  const handleAddUpdateClick = () => {
    navigate("/add-update", { state: { title } });
  };

  return (
    <Container>
      <Header>
        <div>
          <Title>{title}</Title>
        </div>
        <div>
          <Button onClick={handleAddUpdateClick}>+ Add update</Button>
        </div>
      </Header>
      <RecordTable />
    </Container>
  );
}

export default RecordCard;
