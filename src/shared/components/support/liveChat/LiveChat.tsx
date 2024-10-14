import styled from "styled-components";
import { Support } from "../../../ui/Icons";
import Heading from "../../../ui/Heading";
import { useNavigate } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  width: 22rem;
  padding: 1.25rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LiveChat = ({ route }: { route: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };
  return (
    <Wrapper onClick={handleClick}>
      <div style={{ width: "69px", height: "69px", margin: "0 auto" }}>
        <img src={Support} alt="Support Image" />
      </div>
      <Heading as="h2">Live Chat</Heading>
      <p style={{ fontSize: "var(--font-size-sm)" }}>
        Instant help is just a click away! Engage in a live chat with our
        friendly support representatives during our business hours.
      </p>
    </Wrapper>
  );
};
