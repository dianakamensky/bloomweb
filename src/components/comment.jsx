import api from "../api";
import React from "react";

export default function Comment({ userId, content }) {
  const [user, setUser] = React.useState({});

  async function getOwnerInfo() {
    const owner = await api.getUserById(userId);
    setUser(owner);
  }

  React.useEffect(() => {
    getOwnerInfo();
  }, []);

  return (
    <div className="comment">
      <img className="comment__pfp" src={user.pfp} />
      <div className="comment__text">
        <span className="comment__username">{user.username}</span>
        <p className="comment__content">{content}</p>
      </div>
    </div>
  );
}
