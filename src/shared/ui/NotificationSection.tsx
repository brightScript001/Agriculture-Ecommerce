import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import Heading from "./Heading";
import Button from "./Button";

interface Notification {
  id: string;
  message: string;
  date: Date;
  isUnread: boolean;
}

interface NotificationSectionProps {
  notifications: Notification[];
  markAllAsRead: () => void;
}

const NotificationModal = styled.div`
  padding: 1rem;
  margin: 0 auto;
  position: relative;
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-grey-200);
`;

const NotificationList = styled.div``;

const NotificationItem = styled.div<{ isUnread: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-grey-200);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ isUnread }) => (isUnread ? "green" : "transparent")};
  }
`;

const NotificationText = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const NotificationMessage = styled.p`
  margin: 0;
  font-size: var(--font-size-md);
`;

const NotificationDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-grey-500);
`;

const MarkAsReadButton = styled(Button)`
  width: 100%;
`;

const NotificationSection: React.FC<NotificationSectionProps> = ({
  notifications,
  markAllAsRead,
}) => {
  return (
    <NotificationModal>
      <NotificationHeader>
        <Heading as="h2">Notifications</Heading>
      </NotificationHeader>
      <NotificationList>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            isUnread={notification.isUnread}
          >
            <NotificationText>
              <NotificationMessage>{notification.message}</NotificationMessage>
              <NotificationDate>
                {format(notification.date, "eeee hh:mm a")} <br />
                {format(notification.date, "dd-MMM-yyyy")}
              </NotificationDate>
            </NotificationText>
          </NotificationItem>
        ))}
      </NotificationList>
      <MarkAsReadButton onClick={markAllAsRead}>
        Mark all as read
      </MarkAsReadButton>
    </NotificationModal>
  );
};

export default NotificationSection;
