

import { useEffect, useState } from "react";

export default function Notification({ notification }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [notification]);

  if (!notification) return null;

  return (
    <div className={`toast toast-${notification.type} ${visible ? "toast-in" : ""}`}>
      <span className="toast-icon">
        {notification.type === "success" ? "✓" : notification.type === "info" ? "ℹ" : "✕"}
      </span>
      {notification.msg}
    </div>
  );
}
