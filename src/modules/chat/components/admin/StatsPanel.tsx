import type React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import type { ChatStats } from "../../types";

const StatsPanelContainer = styled.div`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
`;

const PanelTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const StatTitle = styled.h4`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const StatRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StatCol = styled.div`
  flex: 1;
`;

const ChartContainer = styled.div`
  height: 200px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const COLORS = [
  "#4CAF50",
  "#2196F3",
  "#FFC107",
  "#F44336",
  "#9C27B0",
  "#FF9800",
];

interface StatsPanelProps {
  stats: ChatStats | null;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  if (!stats) {
    return (
      <StatsPanelContainer>
        <PanelTitle>Chat Statistics</PanelTitle>
        <p>Loading statistics...</p>
      </StatsPanelContainer>
    );
  }

  const conversationStatusData = [
    { name: "Active", value: stats.activeConversations },
    { name: "Resolved", value: stats.resolvedConversations },
    {
      name: "Archived",
      value:
        stats.totalConversations -
        stats.activeConversations -
        stats.resolvedConversations,
    },
  ];

  const messageActivityData = [
    { name: "Last 24h", value: stats.messageCount.last24Hours },
    {
      name: "Previous",
      value: stats.messageCount.total - stats.messageCount.last24Hours,
    },
  ];

  const eventData = stats.eventStats.map((event) => ({
    name: event._id,
    value: event.count,
  }));

  return (
    <StatsPanelContainer>
      <PanelTitle>Chat Statistics</PanelTitle>

      <StatRow>
        <StatCol>
          <StatCard>
            <StatTitle>Total Conversations</StatTitle>
            <StatValue>{stats.totalConversations}</StatValue>
          </StatCard>
        </StatCol>
        <StatCol>
          <StatCard>
            <StatTitle>Active Conversations</StatTitle>
            <StatValue>{stats.activeConversations}</StatValue>
          </StatCard>
        </StatCol>
      </StatRow>

      <StatRow>
        <StatCol>
          <StatCard>
            <StatTitle>Total Messages</StatTitle>
            <StatValue>{stats.totalMessages}</StatValue>
          </StatCard>
        </StatCol>
        <StatCol>
          <StatCard>
            <StatTitle>Messages (24h)</StatTitle>
            <StatValue>{stats.recentMessages}</StatValue>
          </StatCard>
        </StatCol>
      </StatRow>

      <StatCard>
        <StatTitle>Avg. Response Time</StatTitle>
        <StatValue>{stats.averageResponseTime} min</StatValue>
      </StatCard>

      <StatCard>
        <StatTitle>Conversation Status</StatTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={conversationStatusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {conversationStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </StatCard>

      <StatCard>
        <StatTitle>Message Activity</StatTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={messageActivityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </StatCard>

      {eventData.length > 0 && (
        <StatCard>
          <StatTitle>Event Distribution</StatTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eventData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </StatCard>
      )}
    </StatsPanelContainer>
  );
};
