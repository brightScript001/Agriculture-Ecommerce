import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "lucide-react";
import { Conversation } from "../../types";
import { format } from "date-fns";

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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid var(--color-border);
  background-color: var(--color-surface);
`;

const ListHeader = styled.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  padding: 0 var(--spacing-sm);
  border: 1px solid var(--color-border);

  svg {
    color: var(--color-text-secondary);
    width: 18px;
    height: 18px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: var(--spacing-sm);
  background: none;
  font-size: var(--font-size-sm);

  &:focus {
    outline: none;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

const FilterButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: var(--spacing-sm);
  background-color: ${({ active }) =>
    active ? "var(--color-primary)" : "var(--color-background)"};
  color: ${({ active }) =>
    active ? "var(--color-white)" : "var(--color-text)"};
  border: 1px solid
    ${({ active }) => (active ? "var(--color-primary)" : "var(--color-border)")};
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) =>
      active ? "var(--color-primary-dark)" : "var(--color-divider)"};
  }
`;

const ConversationsList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ConversationItem = styled.div<{ selected: boolean; unread: boolean }>`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  background-color: ${({ selected }) =>
    selected ? "var(--color-divider)" : "transparent"};
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;

  ${({ unread }) =>
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
      background-color: var(--color-primary);
    }
  `}

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "var(--color-divider)" : "var(--color-background)"};
  }
`;

const ConversationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xs);
`;

const ConversationTitle = styled.h4`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ConversationTime = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`;

const ConversationPreview = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-top: var(--spacing-xs);

  ${({ status }) => {
    switch (status) {
      case "active":
        return `
          background-color: var(--color-success);
          color: var(--color-white);
        `;
      case "resolved":
        return `
          background-color: var(--color-info);
          color: var(--color-white);
        `;
      case "archived":
        return `
          background-color: var(--color-text-secondary);
          color: var(--color-white);
        `;
      default:
        return "";
    }
  }}
`;
