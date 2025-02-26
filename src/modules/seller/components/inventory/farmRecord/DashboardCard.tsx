import { Title } from "@shared/ui/Title";
import { ArrowRight } from "lucide-react";
import styled from "styled-components";

export const FarmRecord: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <Title>Farm Records</Title>
        <div>
          <ArrowRight size={24} color="black" />
        </div>
      </Head>
      <Content>
        <Paragraph>
          A general assessment of your records is not too great.
        </Paragraph>
        {/* * chart */}
      </Content>
    </Wrapper>
  );
};

// ✅ Ensure FarmRecord expands properly
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  text-decoration: underline;
`;
