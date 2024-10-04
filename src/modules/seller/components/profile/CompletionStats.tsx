import React from "react";
import styled from "styled-components";
import Heading from "../../../../shared/ui/Heading";

interface ProfileCompletionProps {
  completion: number;
}

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const ProgressCircleContainer = styled.div`
  flex-basis: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CircularProgress = styled.svg`
  width: 5rem;
  height: 5rem;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: var(--color-grey-200);
  stroke-width: 10;
`;

const CircleProgress = styled.circle<{ completion: number }>`
  fill: none;
  stroke-width: 10;
  stroke: ${({ completion }) => {
    if (completion < 40) return "var(--color-red-600)";
    if (completion < 75) return "rgba(255, 196, 0, 1)";
    return "var(--color-green-600)";
  }};
  stroke-linecap: round;
  stroke-dasharray: 251.2;
  stroke-dashoffset: ${({ completion }) => 251.2 - (251.2 * completion) / 100};
  transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const PercentageText = styled.text<{ completion: number }>`
  font-size: 1.5rem;
  font-weight: bold;
  fill: ${({ completion }) => {
    if (completion < 40) return "var(--color-red-600)";
    if (completion < 75) return "rgba(255, 196, 0, 1)";
    return "var(--color-green-600)";
  }};
  text-anchor: middle;
  dominant-baseline: middle;
  transition: fill 0.5s ease;
`;

const ProfileMessage = styled.div`
  text-align: center;
  flex-basis: 90%;
`;

export const CompletionStats: React.FC<ProfileCompletionProps> = ({
  completion,
}) => {
  const roundedCompletion = Math.min(Math.max(Math.round(completion), 0), 100);
  const radius = 40; // Radius of the circular progress bar

  return (
    <ProfileSection>
      {/* Circular Progress Bar with Percentage Text Inside */}
      <ProgressCircleContainer>
        <CircularProgress viewBox="0 0 100 100">
          <CircleBackground cx="50" cy="50" r={radius} />
          <CircleProgress
            cx="50"
            cy="50"
            r={radius}
            completion={roundedCompletion}
          />
          <PercentageText x="50" y="50" completion={roundedCompletion}>
            {roundedCompletion}%
          </PercentageText>
        </CircularProgress>
      </ProgressCircleContainer>
      {/* Centered Profile Completion Message */}
      <ProfileMessage>
        <Heading as="h2">
          You need to complete your setup to start selling your products on
          Onefarm Tech
        </Heading>
      </ProfileMessage>
    </ProfileSection>
  );
};
