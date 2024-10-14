import { useNavigate } from "react-router-dom";
import Heading from "../../../ui/Heading";
import { Support } from "../../../ui/Icons";
import { Wrapper } from "../liveChat/LiveChat";

export function FAQ({ route }: { route: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };
  return (
    <Wrapper onClick={handleClick}>
      <div style={{ width: "69px", height: "69px", margin: "0 auto" }}>
        <img src={Support} alt="Support Image" />
      </div>
      <Heading as="h2">FAQ</Heading>
      <p style={{ fontSize: "var(--font-size-sm)" }}>
        We've compiled a list of helpful solutions to guide you through your
        agricultural trading journey.
      </p>
    </Wrapper>
  );
}
