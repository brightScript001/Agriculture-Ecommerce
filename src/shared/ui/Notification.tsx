import React, { useState } from "react";
import { NotificationSection } from "./NotificationSection";

const notificationsData = [
  {
    id: "1",
    message:
      "Your order with order number #OFT-237252 just got approved and you will receive your order on 18-Oct-2023.",
    date: new Date(),
    isUnread: true,
  },
  {
    id: "2",
    message:
      "Your payment for Mango x8 baskets, Tomato x3 baskets, and Green pepper x10 basket was not successful. Please try again.",
    date: new Date(),
    isUnread: true,
  },
  {
    id: "1",
    message:
      "Your order with order number #OFT-237252 just got approved and you will receive your order on 18-Oct-2023.",
    date: new Date(),
    isUnread: true,
  },
  {
    id: "2",
    message:
      "Your payment for Mango x8 baskets, Tomato x3 baskets, and Green pepper x10 basket was not successful. Please try again.",
    date: new Date(),
    isUnread: true,
  },
];

export const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        isUnread: false,
      }))
    );
  };

  return (
    <div>
      <NotificationSection
        notifications={notifications}
        markAllAsRead={markAllAsRead}
      />
    </div>
  );
};
