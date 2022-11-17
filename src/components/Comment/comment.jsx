import "./comment.css";

export default function Comment({ user, content }) {
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
