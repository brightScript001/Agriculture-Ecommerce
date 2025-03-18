import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "lucide-react";
import type { Conversation } from "../../types";
import { format } from "date-fns";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const ListHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
    width: 18px;
    height: 18px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  background: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};

  &:focus {
    outline: none;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const FilterButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.text};
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primaryDark : theme.colors.divider};
  }
`;

const ConversationsList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ConversationItem = styled.div<{ selected: boolean; unread: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.divider : "transparent"};
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;

  ${({ unread, theme }) =>
    unread &&
    `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
    }
  `}

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.divider : theme.colors.background};
  }
`;

const ConversationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ConversationTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ConversationTime = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ConversationPreview = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  margin-top: ${({ theme }) => theme.spacing.xs};

  ${({ status, theme }) => {
    switch (status) {
      case "active":
        return `
          background-color: ${theme.colors.success};
          color: ${theme.colors.white};
        `;
      case "resolved":
        return `
          background-color: ${theme.colors.info};
          color: ${theme.colors.white};
        `;
      case "archived":
        return `
          background-color: ${theme.colors.textSecondary};
          color: ${theme.colors.white};
        `;
      default:
        return "";
    }
  }}
`;

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
  onFilterChange: (filter: { status?: string; search?: string }) => void;
  filter: { status?: string; search?: string };
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedConversationId,
  onSelectConversation,
  onFilterChange,
  filter,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({ search: e.target.value });
  };

  const handleFilterClick = (status: string | undefined) => {
    onFilterChange({ status });
  };

  return (
    <ListContainer>
      <ListHeader>
        <SearchContainer>
          <Search />
          <SearchInput
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchContainer>

        <FilterContainer>
          <FilterButton
            active={!filter.status}
            onClick={() => handleFilterClick(undefined)}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter.status === "active"}
            onClick={() => handleFilterClick("active")}
          >
            Active
          </FilterButton>
          <FilterButton
            active={filter.status === "resolved"}
            onClick={() => handleFilterClick("resolved")}
          >
            Resolved
          </FilterButton>
          <FilterButton
            active={filter.status === "archived"}
            onClick={() => handleFilterClick("archived")}
          >
            Archived
          </FilterButton>
        </FilterContainer>
      </ListHeader>

      <ConversationsList>
        {conversations.map((conversation) => {
          const hasUnreadMessages = false; // This would be determined by your app logic

          return (
            <ConversationItem
              key={conversation._id}
              selected={selectedConversationId === conversation._id}
              unread={hasUnreadMessages}
              onClick={() => onSelectConversation(conversation._id)}
            >
              <ConversationHeader>
                <ConversationTitle>
                  {conversation.title ||
                    `Chat with ${
                      conversation.participants[0]?.firstName || "User"
                    }`}
                </ConversationTitle>
                <ConversationTime>
                  {format(new Date(conversation.updatedAt), "h:mm a")}
                </ConversationTime>
              </ConversationHeader>

              <ConversationPreview>
                {conversation.lastMessage?.content || "No messages yet"}
              </ConversationPreview>

              <StatusBadge status={conversation.status}>
                {conversation.status.charAt(0).toUpperCase() +
                  conversation.status.slice(1)}
              </StatusBadge>
            </ConversationItem>
          );
        })}
      </ConversationsList>
    </ListContainer>
  );
};
