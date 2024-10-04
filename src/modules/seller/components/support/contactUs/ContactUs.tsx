import { useNavigate } from "react-router-dom";
import Heading from "../../../../../shared/ui/Heading";
import { Support } from "../../../../../shared/ui/Icons";
import { Wrapper } from "../liveChat/LiveChat";

export function ContactUs({ route }: { route: string }) {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate(route);
  };

  return (
    <Wrapper onClick={HandleClick}>
      <div style={{ width: "69px", height: "69px", margin: "0 auto" }}>
        <img src={Support} alt="Support Image" />
      </div>
      <Heading as="h2">Contact Us</Heading>
      <p style={{ fontSize: "var(--font-size-sm)" }}>
        Reach out to our support team via email at support@example.com or give
        us a call at +123-456-7890.
      </p>
    </Wrapper>
  );
}
