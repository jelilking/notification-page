import { useState } from "react";
import avatar1 from "./images/avatar-angela-gray.webp";
import avatar2 from "./images/avatar-anna-kim.webp";
import avatar3 from "./images/avatar-jacob-thompson.webp";
import avatar4 from "./images/avatar-kimberly-smith.webp";
import avatar5 from "./images/avatar-mark-webber.webp";
import avatar6 from "./images/avatar-nathan-peterson.webp";
import avatar7 from "./images/avatar-rizky-hasanuddin.webp";
import avatar8 from "./images/image-chess.webp";
// import avatar9 from "./images/avatar-anna-kim.webp";
// import avatar0 from "./images/avatar-jacob-thompson.webp";

const initianlNotification = [
  {
    id: 1,
    name: "Mark webber",
    message: "reacted to your recent post ",
    messageAction: "My first tournament today!",
    time: "1m ago",
    isRead: false,
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Angela Gray",
    message: "followed you",
    isRead: false,
    time: "5m ago",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Jacob Thompson",
    message: "has joined your group ",
    messageAction: "Chess Club",
    time: "1 day ago",
    isRead: false,
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    message: "Rizky Hasanuddin sent you a private message",
    time: " 5 days ago",
    messageInfo:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isRead: true,
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Kimberly Smith",
    message: "commented on your picture",
    messagePic: avatar8,
    time: " 1 week ago",
    isRead: true,
    avatar: avatar5,
  },
  {
    id: 6,
    name: " Nathan Peterson",
    message:
      "reacted to your recent post 5 end-game strategies to increase your win rate",

    time: " 2 weeks ago",
    isRead: true,
    avatar: avatar6,
  },
  {
    id: 7,
    name: "Anna Kim",
    message: "left the group ",
    messageAction: "Chess Club",
    time: "2 weeks ago",
    isRead: true,
    avatar: avatar7,
  },
];

export default function App() {
  return (
    <div className="App">
      <NotifiacationPage />
    </div>
  );
}

function NotifiacationPage() {
  const [notifications, setNotifications] = useState(initianlNotification);

  function handleNotificationClick(id) {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }

  function handleMarkAllAsRead() {
    setNotifications(
      notifications.map((notification) =>
        notification.isRead === false
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <div className="notification-page">
      <div className="header">
        <h1>
          Notifications <span className="count">{unreadCount}</span>
        </h1>
        <button onClick={handleMarkAllAsRead}>Mark all as read</button>
      </div>
      <div className="notification-list">
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={notification.isRead ? "read" : "unread"}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <Notification notification={notification} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Notification({ notification }) {
  return (
    <div className="notification-item">
      <img src={notification.avatar} alt="avatar" />
      <div className="notification-details">
        <div className="details">
          <div className="notification-text">
            <span className="name">{notification.name}</span>
            <span className="message"> {notification.message} </span>
            <span
              className={
                notification.isRead ? "unmessageAction" : "messageAction"
              }
            >
              {notification.messageAction}
            </span>
            <span className="dot">
              {" "}
              {notification.isRead === false ? "●" : ""}
            </span>

            <p className="time">{notification.time}</p>
          </div>

          <div className="image">
            {notification.messagePic && (
              <img src={notification.messagePic} alt="chess" />
            )}
          </div>
        </div>
        {notification.messageInfo && (
          <p className="messageInfo">{notification.messageInfo}</p>
        )}
      </div>
    </div>
  );
}
