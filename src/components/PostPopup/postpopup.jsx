import "./postpopup.css";
import React from "react";
import Comment from "../Comment/comment";
import CommentForm from "../CommentForm/commentform";

export default function PostPopup({ post, onClose, comments }) {
  return (
    <div className="popup popup_open">
      <div className="postpopup">
        <button className="popup__close-btn" onClick={onClose}></button>
        <div className="postpopup__main">
          <img className="postpopup__img" src={post.image}></img>
          <div className="postpopup__bottom">
            <div className="postpopup__info">
              <p className="postpopup__caption">{post.flower}</p>
              <p className="postpopup__caption">{post.location}</p>
              <p className="postpopup__caption">{post.date}</p>
            </div>
            <div className="postpopup__actions">
              <button className="postpopup__btn"></button>
              <button className="postpopup__btn"></button>
            </div>
          </div>
        </div>
        <div className="postpopup__sidebar">
            <div className="postpopup__sidebar-info">
          <Comment
            user={post.owner}
            content={`${post.flower}, ${post.location}, ${post.date}`}
          ></Comment>
           <div className="postpopup__sidebar-actions">
              <button className="postpopup__btn"></button>
            </div>
</div>
          <div className="comments">
            {comments.map((comment) => (
              <Comment user={comment.owner} content={comment.content}></Comment>
            ))}
          </div>
          <CommentForm></CommentForm>
        </div>
      </div>
    </div>
  );
}
