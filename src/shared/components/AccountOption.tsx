import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: var(--color-grey-0);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 100vh;
    justify-content: center;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--color-grey-700);
  margin-bottom: 1rem;

  &:hover {
    color: var(--color-green-700);
  }

  & > svg {
    margin-left: 0.5rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`;

function AccountOptions() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/register/${type}`, { state: { accountType: type } });
  };

  return (
    <Container>
      <Option onClick={() => handleClick("seller")}>
        Create account as a farmer
        <FiArrowRight />
      </Option>
      <Option onClick={() => handleClick("buyer")}>
        Create account as a Buyer
        <FiArrowRight />
      </Option>
    </Container>
  );
}

export default AccountOptions;
